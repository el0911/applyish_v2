import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white text-gray-800 px-6 py-12 lg:px-32">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

        <p className="mb-4 text-sm text-gray-500">Effective Date: May 23, 2025</p>

        <p className="mb-6">
          {`Applyish is committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and protect your information when you use our browser extension. By using Applyish, you agree to the collection and use of information in accordance with this policy.`}
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. What Information We Collect</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>
            <strong>LinkedIn session cookie:</strong> Temporarily stored in memory while the extension is running to apply to jobs.
          </li>
          <li>
            <strong>Usage data:</strong> Anonymous information such as feature usage and errors for performance improvement (optional).
          </li>
          <li>
            <strong>Contact info:</strong> If you reach out to us via email or forms.
          </li>
        </ul>
        <p className="mb-6">We do not collect passwords, financial data, or unrelated personal information.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. How We Use Your Data</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>To apply to jobs on your behalf using your LinkedIn session</li>
          <li>To improve extension features and performance</li>
          <li>To respond to user support and feedback</li>
        </ul>
        <p className="mb-6">We do not sell your data or use it for advertising purposes.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Data Storage & Security</h2>
        <p className="mb-6">
          LinkedIn session cookies are stored temporarily in memory and are never persisted or uploaded to a server.
          We use industry-standard practices to protect any optional analytics or support data.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Data Sharing</h2>
        <p className="mb-6">
          We do not share your data with third parties unless:
        </p>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Required by law or legal process</li>
          <li>You explicitly consent to it</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Your Rights</h2>
        <ul className="list-disc list-inside mb-6 space-y-2">
          <li>Request access to the data we store</li>
          <li>Request deletion of your data</li>
          <li>Opt out of optional analytics</li>
        </ul>
        <p className="mb-6">To exercise these rights, email us at <a href="mailto:privacy@applyish.com" className="text-blue-600 underline">privacy@applyish.com</a>.</p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Updates to This Policy</h2>
        <p className="mb-6">
          We may update this Privacy Policy. Changes will be posted at <a href="https://applyish.com/privacy" className="text-blue-600 underline">applyish.com/privacy</a> with a new effective date.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Contact</h2>
        <p>
          For questions about this Privacy Policy, contact us at:
        </p>
        <p className="mt-2">
          📧 <a href="mailto:privacy@applyish.com" className="text-blue-600 underline">privacy@applyish.com</a><br />
          🌐 <a href="https://applyish.com" className="text-blue-600 underline">https://applyish.com</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
