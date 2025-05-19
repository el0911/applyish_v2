'use client';

import { useState, useEffect } from 'react';

interface LinkedInTokenResponse {
  [domain: string]: Array<{ name: string; value: string }>;
}

interface ExtensionRequest {
  type: string; // e.g., 'FROM_MY_APP_GET_LINKEDIN_TOKENS'
  requestId: string; // Unique ID to match request and response
  payload?: Record<string, string >; // Any additional data needed by the extension
}


interface ExtensionResponse {
  type: string; // e.g., 'FROM_EXTENSION_RESPONSE', 'FROM_EXTENSION_ERROR'
  requestId: string; // Must match the request ID
  tokens?:LinkedInTokenResponse; // The actual response data
  error?: string // Error message if type is FROM_EXTENSION_ERROR
}

export default function ConnectLinkedIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError]       = useState<string | null>(null);
  const [timeoutError, setTimeoutError] = useState(false);
  const [success, setSuccess]   = useState<string | null>(null);
  const [hasTokens, setHasTokens] = useState(false);
  // const router = useRouter();

  // ... your existing useEffect for fetchStatus ...
// This function now sends a message via postMessage and waits for a response
const getLinkedInTokens = (): Promise<LinkedInTokenResponse> => {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      return reject(new Error('Window is not available.'));
    }

    // Generate a unique ID for this specific request
    const requestId = `getTokens_${Date.now()}_${Math.random().toString(36).substring(2, 15)}`;

    let timeoutId: NodeJS.Timeout | null = null; // To manage the timeout

    // --- Listener for messages from the extension (via content script) ---
    const handleExtensionMessage = (event: MessageEvent) => {
      console.log('Received message from extension:', event.data);
      // IMPORTANT: Security checks!
      // 1. Check origin: Make sure the message comes from the expected domain (your own site)
      if (event.origin !== window.location.origin) {
        console.warn('Received message from unknown origin:', event.origin);
        return;
      }
      // 2. Check source: Make sure the message comes from the window itself
      if (event.source !== window) {
        console.warn('Received message not from window source');
        return;
      }

      const response = event.data as ExtensionResponse;

      console.log('Response data:', response);

      // 3. Check message structure and our specific request ID
      if (response && (response.type === 'FROM_MY_APP_GET_LINKEDIN_TOKENS_RESPONSE' || response.type === 'FROM_EXTENSION_ERROR') && response.requestId === requestId) {

        // Found the corresponding response, remove the listener and timeout
        //   window.removeEventListener('message', handleExtensionMessage);
        if (timeoutId) clearTimeout(timeoutId);

        if (response.type === 'FROM_EXTENSION_ERROR') {
          reject(new Error(response.error || 'An error occurred in the extension.'));
        } else { // Assuming response.type is 'FROM_EXTENSION_RESPONSE'
          // Further validate the payload structure if necessary
          if (!response.tokens) {
            reject(new Error('Invalid response format from extension.'));
          } else {
            resolve(response.tokens);
          }
        }
      }
      // Ignore messages that don't match our requestId or expected types
    };

    // Add the event listener
    window.addEventListener('message', handleExtensionMessage);

    // --- Send the request message to the extension (via content script) ---
    const request: ExtensionRequest = {
      type: 'FROM_MY_APP_GET_LINKEDIN_TOKENS', // A specific type your content script listens for
      requestId: requestId, // Include the unique ID
      payload: {} // Data needed by extension
    };

    // Post the message to the window. The content script injected by the extension
    // into this page will be listening for messages on the same window object.
    // IMPORTANT: Always specify the target origin for security!
    window.postMessage(request, window.location.origin);

    // Set a timeout for the response
    timeoutId = setTimeout(() => {
      window.removeEventListener('message', handleExtensionMessage);
      reject(new Error('Extension response timed out.'));
    }, 15000); // Increased timeout to 15 seconds - fetching cookies might take a moment
  });
};

 // On mount, check if the user already has LinkedIn tokens in DB
 useEffect(() => {
  const fetchStatus = async () => {
    try {
      const res = await fetch('/api/linkedin/connect');
      if (!res.ok) throw new Error(`Status check failed (${res.status})`);
      const data = await res.json() as { tokens: boolean };
      setHasTokens(data.tokens);
    } catch (e) {
      console.error('Could not fetch LinkedIn status', e);
    }
  };
  fetchStatus();
}, []);
 

  const handleSync = async () => {
    setLoading(true);
    setError(null);
    setTimeoutError(false);
    setSuccess(null);

    try {
      const tokensResponse = await getLinkedInTokens();  
      const cookieList = tokensResponse
      if (!cookieList.cookies || !cookieList.cookies.length) {
        throw new Error('No LinkedIn cookies found. Are you logged in to LinkedIn?');
      }
      const res = await fetch('/api/linkedin/connect', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ tokens: cookieList }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || 'Server error syncing tokens');
      }
      // Mark connected and show a one-off success message
      setHasTokens(true);
      setSuccess('✅ LinkedIn tokens synced successfully!');
      
     } 
      catch (err: unknown) {
      const msg = (err instanceof Error) ? err.message : String(err);
      if (msg.includes('Extension response timed out')) {
        // special timeout UI
        setTimeoutError(true);
      } else {
        setError(msg);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      {hasTokens
        ? <p className="text-green-500">You’re connected to LinkedIn.</p>
        : <p className="text-gray-300">Not yet connected to LinkedIn.</p>
      }

      <button
        onClick={handleSync}
        disabled={loading}
        className="px-6 py-3 border border-white rounded-lg uppercase tracking-wider font-semibold hover:bg-white hover:text-black transition disabled:opacity-50"
      >
        {loading
           ? 'Syncing…'
           : hasTokens
             ? 'Re-sync LinkedIn'
             : 'Sync LinkedIn'
        }
      </button>

      {/* Success */}
      {success && <p className="text-green-400">{success}</p>}

      {/* Generic Error */}
      {error && <p className="text-red-400">{error}</p>}

      {/* Timeout-specific Callout */}
      {timeoutError && (
        <div className="w-full max-w-md p-4 bg-yellow-50 border-l-4 border-yellow-400 text-yellow-800">
          <h3 className="font-semibold mb-2">Can’t reach our extension?</h3>
          <p className="mb-3">
            It looks like we hit a snag talking to LinkedIn. Please make sure:
          </p>
          <ul className="list-disc list-inside mb-3">
            <li>
              Our extension is installed and enabled.  
              <a
                href="https://chrome.google.com/webstore/detail/your-extension-id"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium ml-1"
              >
                Install/Enable it here
              </a>
            </li>
            <li>
              You’re signed into LinkedIn in this browser.  
              <a
                href="https://www.linkedin.com/login"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium ml-1"
              >
                Go to LinkedIn Login
              </a>
            </li>
          </ul>
          <p>If you still need help, mail me <a
            href="mailto:el@applyish.com:subject=LinkedIn%20Extension%20Help"
            className="underline font-medium"
            >
              Say hi we would jump of a plane to help you
            </a>.
          </p>
        </div>
      )}
    </div>
  );
}
