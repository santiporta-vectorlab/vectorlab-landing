import React, { useState } from 'react';

const QuickScan: React.FC = () => {
  const [url, setUrl] = useState('');
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [logs, setLogs] = useState<string[]>([]);

  const startScan = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setScanState('scanning');
    setLogs(['> Initializing connection to target...']);
    
    // Simulate scan steps taking ~10 seconds total
    const steps = [
      '> Resolving DNS records...',
      '> Establishing secure connection to target...',
      '> Checking SSL/TLS certificate validity and cipher suites...',
      '> Analyzing HTTP security headers...',
      '> Enumerating exposed endpoints and directories...',
      '> Scanning for open ports and services...',
      '> Checking against CVE databases for known vulnerabilities...',
      '> Evaluating cross-site scripting (XSS) and CSRF protections...',
      '> Compiling initial results and risk scoring...'
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      if (currentStep < steps.length) {
        setLogs(prev => [...prev, steps[currentStep]]);
        currentStep++;
      } else {
        clearInterval(interval);
        setTimeout(() => setScanState('complete'), 1000);
      }
    }, 1100);
  };

  return (
    <section className="w-full py-20 px-6 bg-zinc-900/30 border-t border-zinc-900">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">Quick Scan</h2>
          <p className="text-zinc-400 text-sm">Enter your domain to identify immediate security risks.</p>
        </div>

        {scanState === 'idle' && (
          <form onSubmit={startScan} className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
            <input
              type="text"
              placeholder="e.g. yourcompany.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              required
              className="flex-1 bg-zinc-950 border border-zinc-800 text-zinc-200 px-4 py-3 focus:outline-none focus:border-emerald-500 font-mono text-sm"
            />
            <button type="submit" className="bg-emerald-500 text-zinc-950 font-bold px-6 py-3 hover:bg-emerald-400 transition-colors whitespace-nowrap">
              Run Scan
            </button>
          </form>
        )}

        {scanState !== 'idle' && (
          <div className="bg-zinc-950 border border-zinc-800 p-6 rounded-sm font-mono text-sm max-w-2xl mx-auto shadow-[0_0_30px_rgba(16,185,129,0.05)]">
            <div className="flex items-center gap-2 mb-4 pb-4 border-b border-zinc-900">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <span className="text-zinc-500 ml-2 text-xs">target: {url}</span>
            </div>
            
            <div className="space-y-2 mb-6 h-48 overflow-y-auto">
              {logs.map((log, i) => (
                <div key={i} className="text-zinc-400">{log}</div>
              ))}
              {scanState === 'scanning' && (
                <div className="text-emerald-500 animate-pulse">_</div>
              )}
            </div>

            {scanState === 'complete' && (
              <div className="animate-fade-in border-t border-zinc-900 pt-6 mt-6">
                <div className="text-emerald-500 mb-2 font-bold">
                  [+] Scan complete. Robust environment detected.
                </div>
                <div className="text-zinc-400 mb-4 text-sm leading-relaxed">
                  We identified opportunities to further strengthen your infrastructure. Please review our services or contact our team for a comprehensive audit.
                </div>
                <button 
                  onClick={() => {
                    setScanState('idle');
                    setUrl('');
                    setLogs([]);
                  }}
                  className="bg-zinc-800 text-zinc-300 font-medium px-4 py-2 hover:bg-zinc-700 transition-colors text-xs"
                >
                  Restart Scan
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default QuickScan;
