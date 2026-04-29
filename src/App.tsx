import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import ServicesGrid from './components/ServicesGrid';
import QuickScan from './components/QuickScan';
import ContactSection from './sections/ContactSection';
import Footer from './components/Footer';
import HoverDecrypt from './components/HoverDecrypt';
import TermsOfService from './pages/TermsOfService';
import PrivacyPolicy from './pages/PrivacyPolicy';
import SecurityQuiz from './components/SecurityQuiz';

const App: React.FC = () => {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      setCurrentHash(hash);
      
      if (hash === '#terms' || hash === '#privacy' || hash === '' || hash === '#') {
        window.scrollTo(0, 0);
      } else {
        // Smooth scroll to the section
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 selection:bg-emerald-500/30 font-sans">
      <Header />

      {currentHash === '#terms' ? (
        <TermsOfService />
      ) : currentHash === '#privacy' ? (
        <PrivacyPolicy />
      ) : (
        <>
          {/* Hero Section */}
          <main className="flex flex-col items-center justify-center min-h-[calc(100vh-73px)] p-6">
            <div className="text-center max-w-2xl mt-12 mb-24">
              <div className="flex justify-center mb-8">
                <div className="relative flex h-4 w-4 animate-fade-out-in">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 shadow-[0_0_15px_5px_rgba(16,185,129,0.8)]"></span>
                </div>
              </div>
              <h1 className="font-extrabold mb-6 min-h-[80px] flex items-center justify-center">
                <HoverDecrypt text="Security is the product." />
              </h1>
              <p className="text-zinc-400 font-mono text-sm md:text-base mb-10 leading-relaxed">
                {'>'} Zero-Trust architecture, threat intelligence, and corporate resilience.
              </p>
              <a href="#contact" className="px-6 py-3 bg-white text-black font-medium hover:bg-emerald-400 transition-colors inline-flex items-center gap-2">
                Start Assessment
                <span className="font-mono text-xs">_</span>
              </a>
            </div>
          </main>

          {/* Services Section */}
          <ServicesGrid />

          {/* Security Quiz Section */}
          <SecurityQuiz />

          {/* Quick Scan Section */}
          <QuickScan />

          {/* Contact Section */}
          <ContactSection />
        </>
      )}

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default App;

