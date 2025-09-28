import { useEffect } from 'react';

const useSprig = () => {
  useEffect(() => {
    // Load Microsoft Clarity
    if (!document.getElementById('clarity-script')) {
      const clarityScript = document.createElement('script');
      clarityScript.id = 'clarity-script';
      clarityScript.type = 'text/javascript';
      clarityScript.innerHTML = `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_API}");
      `;
      document.head.appendChild(clarityScript);
    }

    // Load Google Analytics (gtag.js)
    if (!document.getElementById('gtag-js')) {
      const gaScript = document.createElement('script');
      gaScript.id = 'gtag-js';
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`;
      gaScript.async = true;
      document.head.appendChild(gaScript);
    }

    // Google Analytics inline config
    if (!document.getElementById('gtag-config')) {
      const gaConfigScript = document.createElement('script');
      gaConfigScript.id = 'gtag-config';
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
      `;
      document.head.appendChild(gaConfigScript);
    }

    // No cleanup: analytics should persist across SPA transitions

  }, []); // Runs once on mount
};

export default useSprig;
