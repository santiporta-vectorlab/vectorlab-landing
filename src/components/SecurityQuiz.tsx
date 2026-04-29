import React, { useState } from 'react';

type QuizMode = 'enterprise' | 'personal' | 'hacker' | null;
type QuizState = 'selecting' | 'playing' | 'result';

interface Question {
  text: string;
  options: {
    text: string;
    points: number;
  }[];
}

const quizData: Record<string, Question[]> = {
  enterprise: [
    {
      text: 'An employee receives an urgent email from the "CEO" requesting an immediate wire transfer to a new vendor. What is the immediate policy action?',
      options: [
        { text: 'Verify the request via a secondary communication channel (e.g., phone call or Slack) with the CEO.', points: 2 },
        { text: 'Process the wire transfer immediately to avoid delaying business operations.', points: 0 },
        { text: 'Reply to the email asking for additional documentation before proceeding.', points: 1 },
      ]
    },
    {
      text: 'A critical Zero-Day vulnerability is announced for a software suite used by your company. How do you proceed?',
      options: [
        { text: 'Wait for the next scheduled monthly patch cycle to deploy the fix.', points: 0 },
        { text: 'Isolate affected systems, apply temporary mitigations (WAF rules), and patch immediately once available.', points: 2 },
        { text: 'Email all employees warning them not to use the software until further notice.', points: 1 },
      ]
    },
    {
      text: 'What is the most effective approach to managing third-party vendor access to your internal network?',
      options: [
        { text: 'Provide them with standard employee VPN access and AD credentials.', points: 0 },
        { text: 'Implement a Zero-Trust Architecture with Just-In-Time (JIT) access and strict MFA.', points: 2 },
        { text: 'Create a dedicated "vendor" account with a shared password that is changed quarterly.', points: 1 },
      ]
    },
    {
      text: 'Ransomware has successfully encrypted a core database server. What is the first step in incident response?',
      options: [
        { text: 'Pay the ransom immediately to minimize downtime and data loss.', points: 0 },
        { text: 'Disconnect the infected server from the network to prevent lateral movement.', points: 2 },
        { text: 'Restore the database from the previous night\'s backup while the server is still online.', points: 1 },
      ]
    },
    {
      text: 'Which Multi-Factor Authentication (MFA) method provides the strongest resistance against phishing attacks?',
      options: [
        { text: 'SMS-based One-Time Passwords (OTP).', points: 0 },
        { text: 'Authenticator Apps (e.g., Google Authenticator, Authy).', points: 1 },
        { text: 'FIDO2 / WebAuthn Hardware Security Keys (e.g., YubiKey).', points: 2 },
      ]
    }
  ],
  personal: [
    {
      text: 'You are working from a public cafe and need to check your bank account. How do you connect?',
      options: [
        { text: 'Use the cafe\'s free Wi-Fi since it has a password written on the board.', points: 0 },
        { text: 'Use your smartphone\'s mobile hotspot or a trusted, paid VPN service over the cafe Wi-Fi.', points: 2 },
        { text: 'Use the cafe Wi-Fi but ensure the bank website has a padlock icon (HTTPS).', points: 1 },
      ]
    },
    {
      text: 'You need to create a new password for your email account. Which approach is best?',
      options: [
        { text: 'Use a memorable phrase with numbers and symbols (e.g., Tr0ub4dor&3!).', points: 1 },
        { text: 'Use a password manager to generate and store a 20+ character random string.', points: 2 },
        { text: 'Use the same strong password you use for your banking and social media.', points: 0 },
      ]
    },
    {
      text: 'You receive an unexpected SMS claiming a package delivery failed, with a link to reschedule. What do you do?',
      options: [
        { text: 'Click the link and quickly check if the website looks legitimate.', points: 0 },
        { text: 'Ignore the SMS and check your expected delivery tracking numbers directly on the courier\'s official website or app.', points: 2 },
        { text: 'Reply to the SMS asking for more details about the package.', points: 1 },
      ]
    },
    {
      text: 'Your smartphone is stolen. What is the most critical pre-existing protection that saves your data?',
      options: [
        { text: 'A strong lock screen PIN/biometrics and full-disk encryption.', points: 2 },
        { text: 'Having a tracking app installed to find its location.', points: 1 },
        { text: 'Hiding your banking apps in a secret folder.', points: 0 },
      ]
    },
    {
      text: 'When enabling Two-Factor Authentication (2FA) on your personal accounts, what should you always do?',
      options: [
        { text: 'Use your primary phone number for SMS codes on all accounts.', points: 0 },
        { text: 'Generate and securely store backup recovery codes in a safe place offline or in a secure password manager.', points: 2 },
        { text: 'Only enable 2FA on your bank account, it\'s too annoying for email or social media.', points: 1 },
      ]
    }
  ],
  hacker: [
    {
      text: 'You need to analyze a highly suspicious, obfuscated binary. What is the safest initial approach?',
      options: [
        { text: 'Run it in an isolated, snapshotted virtual machine (VM) with no host network access.', points: 2 },
        { text: 'Upload it to VirusTotal and rely entirely on the AV engine signatures.', points: 1 },
        { text: 'Execute it on your host machine while running Wireshark to capture the C2 traffic.', points: 0 },
      ]
    },
    {
      text: 'During a red team engagement, you find a Blind SQL Injection vulnerability. How do you best extract data?',
      options: [
        { text: 'Use a UNION-based payload to dump the tables directly to the screen.', points: 0 },
        { text: 'Use boolean-based or time-based inferential payloads to extract data character by character.', points: 2 },
        { text: 'Run sqlmap with maximum threads to dump the database as fast as possible.', points: 1 },
      ]
    },
    {
      text: 'You suspect lateral movement within a Windows Active Directory environment. What artifact provides the highest fidelity indicator?',
      options: [
        { text: 'High CPU usage on the Domain Controller.', points: 0 },
        { text: 'Anomalous Ticket Granting Ticket (TGT) requests or Pass-the-Hash indicators in Windows Security Event Logs (e.g., Event ID 4624 Type 9).', points: 2 },
        { text: 'A sudden increase in outbound HTTPS traffic from a workstation.', points: 1 },
      ]
    },
    {
      text: 'What is a critical component of maintaining OPSEC (Operational Security) during threat research?',
      options: [
        { text: 'Using a standard commercial VPN provider for all research activities.', points: 1 },
        { text: 'Using your personal browser logged into your Google account but in Incognito Mode.', points: 0 },
        { text: 'Utilizing compartmentalized VMs, dedicated burner infrastructure, and Tor for attribution masking.', points: 2 },
      ]
    },
    {
      text: 'You are reverse engineering a packed executable. What is usually the first step to understand its core logic?',
      options: [
        { text: 'Find the Original Entry Point (OEP) by dumping the process memory after it unpacks itself.', points: 2 },
        { text: 'Read the strings output to find hardcoded credentials.', points: 1 },
        { text: 'Disassemble the packed binary directly using IDA Pro or Ghidra and read the obfuscated assembly.', points: 0 },
      ]
    }
  ]
};

const getRankText = (score: number) => {
  if (score <= 4) return { title: 'CRITICAL RISK', desc: 'Your security posture is highly vulnerable. Immediate remediation is required to prevent compromise.', color: 'text-red-500', bg: 'bg-red-500/10' };
  if (score <= 7) return { title: 'ELEVATED RISK', desc: 'You have foundational security knowledge, but several attack vectors remain exposed.', color: 'text-yellow-500', bg: 'bg-yellow-500/10' };
  return { title: 'HARDENED TARGET', desc: 'Excellent security posture. You understand advanced threats and defensive mechanisms.', color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
};

const SecurityQuiz: React.FC = () => {
  const [mode, setMode] = useState<QuizMode>(null);
  const [quizState, setQuizState] = useState<QuizState>('selecting');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = (selectedMode: QuizMode) => {
    setMode(selectedMode);
    setQuizState('playing');
    setCurrentQuestion(0);
    setScore(0);
  };

  const handleAnswer = (points: number) => {
    setScore(prev => prev + points);
    
    if (mode && currentQuestion < quizData[mode].length - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      setQuizState('result');
    }
  };

  const resetQuiz = () => {
    setMode(null);
    setQuizState('selecting');
    setCurrentQuestion(0);
    setScore(0);
  };

  return (
    <section id="quiz" className="w-full py-24 px-6 bg-zinc-950 border-t border-zinc-900">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="font-mono text-emerald-500 text-sm mb-4">// interactive_assessment</div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Security Posture Quiz</h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">Evaluate your resilience against modern threats. Select a scenario profile below.</p>
        </div>

        {quizState === 'selecting' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <button onClick={() => startQuiz('enterprise')} className="p-8 border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 text-left group rounded-sm">
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors mb-3">Enterprise</h3>
              <p className="text-zinc-400 text-sm">Focus on corporate policies, compliance, and infrastructure defense.</p>
            </button>
            <button onClick={() => startQuiz('personal')} className="p-8 border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 text-left group rounded-sm">
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors mb-3">Personal Use</h3>
              <p className="text-zinc-400 text-sm">Focus on daily digital hygiene, phishing, and device security.</p>
            </button>
            <button onClick={() => startQuiz('hacker')} className="p-8 border border-zinc-800 bg-zinc-900/50 hover:border-emerald-500 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-all duration-300 text-left group rounded-sm">
              <h3 className="text-xl font-bold text-white group-hover:text-emerald-500 transition-colors mb-3">Enthusiast / Hacker</h3>
              <p className="text-zinc-400 text-sm">Focus on advanced OPSEC, reverse engineering, and threat hunting.</p>
            </button>
          </div>
        )}

        {quizState === 'playing' && mode && (
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center text-xs font-mono text-zinc-500 mb-8 border-b border-zinc-800 pb-4">
              <span className="uppercase tracking-widest">{mode} PROFILE</span>
              <span>QUESTION {currentQuestion + 1} OF 5</span>
            </div>
            
            <h3 className="text-xl md:text-2xl font-medium text-white leading-relaxed mb-8">
              {quizData[mode][currentQuestion].text}
            </h3>

            <div className="space-y-4">
              {quizData[mode][currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.points)}
                  className="w-full text-left p-4 border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-800 hover:border-zinc-700 transition-colors rounded-sm text-zinc-300 text-sm md:text-base leading-relaxed"
                >
                  <span className="font-mono text-emerald-500 mr-3">[{String.fromCharCode(65 + idx)}]</span>
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {quizState === 'result' && (
          <div className="max-w-xl mx-auto text-center">
            <div className={`inline-block p-6 border rounded-sm mb-8 w-full ${getRankText(score).bg} border-current ${getRankText(score).color}`}>
              <div className="text-6xl font-black mb-2">{score}<span className="text-2xl text-opacity-50">/10</span></div>
              <div className="text-xl font-bold tracking-widest uppercase">{getRankText(score).title}</div>
            </div>
            
            <p className="text-zinc-300 text-lg mb-10 leading-relaxed">
              {getRankText(score).desc}
            </p>

            <button 
              onClick={resetQuiz}
              className="bg-white text-black font-medium px-8 py-3 hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
            >
              Take Another Assessment
              <span className="font-mono text-xs">_</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SecurityQuiz;
