import React from 'react';

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-[calc(100vh-160px)] max-w-4xl mx-auto py-24 px-6 text-zinc-300">
      <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
      
      <div className="space-y-8 font-sans leading-relaxed">
        <section className="p-6 bg-zinc-900 border border-emerald-500/30 rounded-sm">
          <h2 className="text-xl font-bold text-emerald-500 mb-3">Data Confidentiality & Vulnerability Handling</h2>
          <p className="text-sm">
            Due to the sensitive nature of cybersecurity consulting, we adhere to a strict policy of data minimization and absolute confidentiality. Any infrastructure architectural details, vulnerability reports, penetration test results, or risk assessments generated during our engagements are treated as highly classified. We do not store client vulnerability data on public-facing servers. Your operational data will never be shared, sold, or disclosed to any third party without your explicit, written cryptographic or signed consent.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
          <p>
            We collect basic operational information to facilitate communication and perform our services. This includes contact information (Name, Email, Company) provided voluntarily through our web forms or "Quick Scan" tool, as well as technical data strictly required for executing authorized security assessments.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">2. Use of Information</h2>
          <div>
            <p className="mb-2">The information we collect is used exclusively to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-2 text-zinc-400">
              <li>Provide, operate, and maintain our services.</li>
              <li>Deliver security assessment reports and recommendations.</li>
              <li>Communicate regarding technical inquiries or service updates.</li>
              <li>Comply with legal and regulatory obligations.</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">3. Security of Your Data</h2>
          <p>
            We utilize industry-standard cryptographic protocols (TLS 1.3, AES-256) to protect data in transit and at rest. Access to client data is strictly compartmentalized based on the principle of least privilege.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4">4. Cookies and Tracking</h2>
          <p>
            We employ minimal, non-intrusive tracking technologies solely for website performance and basic analytics. We do not use third-party tracking pixels that compromise your privacy or sell browsing data to advertising networks.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
