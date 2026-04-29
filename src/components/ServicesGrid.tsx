import React, { useState } from 'react';

const services = [
  {
    title: 'GRC & Compliance',
    description: 'Focus on audits and Vanta/Drata platforms.',
    details: 'We streamline your path to SOC2, ISO 27001, and C4 CCSS compliance. Our team integrates directly with platforms like Vanta and Drata to automate evidence collection, continuous monitoring, and policy enforcement.'
  },
  {
    title: 'Cloud Engineering',
    description: 'Scalable AWS architectures using Terraform.',
    details: 'We design, deploy, and manage secure AWS infrastructure using Infrastructure as Code (Terraform). From secure VPC designs and IAM least-privilege configurations to robust CI/CD pipelines.'
  },
  {
    title: 'Offensive Security',
    description: 'Pentesting and vulnerability detection.',
    details: 'Our ethical hackers simulate real-world attacks to identify weaknesses before malicious actors do. We provide comprehensive web application, network, and API penetration testing with actionable remediation steps.'
  },
  {
    title: 'SecOps & Defense',
    description: 'Incident detection and response.',
    details: '24/7 monitoring and rapid incident response to detect, contain, and eradicate threats. We deploy robust SIEM/EDR solutions and threat hunting techniques to keep your network secure.'
  },
  {
    title: 'Strategic Advisory',
    description: 'vCISO services and risk management.',
    details: 'Gain executive-level security leadership without the full-time cost. Our vCISOs help align your security strategy with business objectives, manage third-party risks, and handle compliance board reporting.'
  },
  {
    title: 'Enterprise IT Foundations',
    description: 'Apple fleet management (Jamf/Kandji) and Ubiquiti networks.',
    details: 'Secure your corporate endpoints and network infrastructure. We specialize in zero-touch MDM deployments for macOS/iOS devices and enterprise-grade Ubiquiti UniFi network setups.'
  }
];

const ServicesGrid: React.FC = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="services" className="w-full py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Services</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                onClick={() => toggleExpand(index)}
                className={`group p-8 border cursor-pointer transition-all duration-300 rounded-sm ${
                  isExpanded 
                    ? 'border-emerald-500 bg-zinc-900 shadow-[0_0_20px_rgba(16,185,129,0.15)]' 
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                }`}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className={`text-xl font-bold transition-colors ${isExpanded ? 'text-emerald-500' : 'text-zinc-100 group-hover:text-emerald-500'}`}>
                    {service.title}
                  </h3>
                  <svg 
                    className={`w-5 h-5 mt-1 text-zinc-500 transition-transform duration-300 ${isExpanded ? 'rotate-180 text-emerald-500' : 'group-hover:text-emerald-500'}`} 
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                
                <p className="text-zinc-400 text-sm leading-relaxed">
                  {service.description}
                </p>

                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isExpanded ? 'max-h-48 opacity-100 mt-6 pt-4 border-t border-zinc-800' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-zinc-300 text-sm leading-relaxed">
                    {service.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
