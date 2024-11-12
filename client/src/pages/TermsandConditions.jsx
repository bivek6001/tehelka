// src/TermsAndConditions.js
import React from 'react';

function TermsAndConditions() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-6 py-12">
      <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-center text-indigo-700 mb-6">
          Terms and Conditions
        </h1>

        <section className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">1. Acceptance of Terms</h2>
            <p>
              Welcome to [Your Project Name]. By accessing or using our platform, you agree to be bound
              by these Terms and Conditions and our Privacy Policy. If you do not agree, please do not
              use our service.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">2. Eligibility</h2>
            <p>
              To use [Your Project Name], you must be at least 13 years old (or the minimum age required by
              the laws of your country). By using the platform, you represent that you meet this requirement.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">3. User Account</h2>
            <p>
              You may be required to register for an account to access certain features. You are responsible
              for maintaining the confidentiality of your account information and for all activities under
              your account.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">4. User Conduct</h2>
            <p>
              You agree not to post, upload, or share any content that is unlawful, abusive, defamatory,
              obscene, or otherwise objectionable. You also agree not to engage in any behavior that could
              harm or disrupt our platform or infringe on the rights of others.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">5. User Content</h2>
            <p>
              By posting content on [Your Project Name], you grant us a non-exclusive, worldwide, royalty-free
              license to use, distribute, and display your content on our platform. You retain ownership of
              your content but acknowledge that we may use it in connection with our services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">6. Privacy</h2>
            <p>
              We respect your privacy. Our Privacy Policy explains how we collect, use, and protect your
              personal information. By using the platform, you agree to our data practices as described in
              the Privacy Policy.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">7. Prohibited Activities</h2>
            <p>
              - Impersonating others or providing false information.<br />
              - Spamming, phishing, or engaging in any form of unsolicited messages.<br />
              - Hacking, scraping, or using automated systems to access the platform without permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">8. Intellectual Property</h2>
            <p>
              All content provided by [Your Project Name], including graphics, logos, and code, is our
              intellectual property. You may not copy, reproduce, or distribute this content without our
              permission.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">9. Termination</h2>
            <p>
              We reserve the right to terminate or suspend your account at our discretion, particularly if
              you violate these Terms and Conditions or engage in prohibited activities.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">10. Disclaimer of Warranties</h2>
            <p>
              [Your Project Name] is provided "as is" without any warranties, express or implied. We do not
              guarantee that our platform will be error-free, secure, or always available.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">11. Limitation of Liability</h2>
            <p>
              We are not liable for any damages or losses arising from your use of our platform or your
              inability to access or use it.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">12. Governing Law</h2>
            <p>
              These Terms and Conditions are governed by the laws of [Your Country/State]. You agree to
              submit to the jurisdiction of the courts in [Your Country/State] in case of any disputes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-indigo-600">13. Changes to Terms</h2>
            <p>
              We may update these Terms and Conditions from time to time. Continued use of [Your Project Name]
              following any updates indicates your acceptance of the changes.
            </p>
          </div>
        </section>

        <div className="text-center mt-8">
        <button className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-md hover:from-indigo-700 hover:to-purple-700">
  Accept Terms
</button>

        </div>
      </div>
    </div>
  );
}

export default TermsAndConditions;
