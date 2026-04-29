import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-zinc-900 bg-zinc-950 py-8 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-sm">
        <div className="text-emerald-500">
          © 2025 VECTOR-LAB, ALL RIGHTS RESERVED.
        </div>
        <div className="flex items-center gap-6 text-zinc-500">
          <a href="#terms" className="hover:text-emerald-500 transition-colors">
            Terms of Service
          </a>
          <a href="#privacy" className="hover:text-emerald-500 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
