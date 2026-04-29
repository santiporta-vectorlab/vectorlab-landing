import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950 px-6 py-4 flex items-center justify-between">
      <a href="#" className="flex items-center">
        <span className="font-mono text-xl font-bold tracking-tight text-zinc-100">
          vectorlab<span className="text-emerald-500">.</span>io
        </span>
      </a>
      
      {/* Navigation - Minimalist terminal style */}
      <nav className="hidden md:flex items-center gap-8">
        <a href="#services" className="text-sm font-mono text-zinc-400 hover:text-emerald-500 transition-colors">
          -services
        </a>

        <a href="#contact" className="text-sm font-mono text-zinc-400 hover:text-emerald-500 transition-colors">
          .contact
        </a>
      </nav>

      {/* Mobile Menu Placeholder */}
      <button className="md:hidden text-zinc-400 hover:text-zinc-100">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
    </header>
  );
};

export default Header;
