import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] max-w-4xl mx-auto py-24 px-6 text-zinc-300">
      <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
      
      <div className="space-y-8 font-sans leading-relaxed">
        <section className="p-6 bg-zinc-900 border border-emerald-500/30 rounded-sm">
          <h2 className="text-xl font-bold text-emerald-500 mb-3">Cybersecurity Disclaimer & Authorization</h2>
          <p className="text-sm">
            Vector-Lab provides advisory, penetration testing, and simulated offensive security services. By utilizing our tools, quick scans, or services, you explicitly confirm that you are the authorized owner of the target infrastructure or have obtained explicit, documented consent from the owner. Vector-Lab is not liable for any disruption of service, hardware failure, or data loss resulting from agreed-upon security assessments. All tools, scripts, and simulated scans are provided on an "as is" and "as available" basis without any warranties, express or implied.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing vectorlab.io or using our services, you agree to be bound by these Terms of Service. If you do not agree to these terms, you must not use our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Service Limitations</h2>
          <p>
            Our "Quick Scan" and related automated tools are simulated environments intended for lead generation and preliminary risk assessment. They do not replace a comprehensive, manual penetration test. Vector-Lab makes no guarantee that all vulnerabilities will be discovered.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Confidentiality</h2>
          <p>
            Both parties agree to hold all proprietary or confidential information in strict confidence. This includes any vulnerability data discovered during an engagement. We adhere to strict Non-Disclosure Agreements (NDAs) prior to commencing any formal assessment.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
          <p>
            In no event shall Vector-Lab, its directors, employees, or partners be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of our services.
          </p>
        </section>
      </div>
    </div>
  );
};

export default TermsOfService;
