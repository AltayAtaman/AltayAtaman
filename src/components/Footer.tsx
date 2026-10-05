import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { translations, Language } from '../translations';

function GithubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Footer({ lang }: { lang: Language }) {
  const [copied, setCopied] = useState(false);
  const t = translations[lang];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('i.altay.ataman@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer id="contact" className="border-t border-zinc-800 pt-16 space-y-8 max-w-5xl mx-auto px-6 pb-12 w-full">
      <div className="max-w-2xl space-y-3">
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          {t.contact.heading}
        </h2>
        <p className="text-zinc-400 text-sm leading-relaxed">
          {t.contact.desc}
        </p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <button
          onClick={handleCopyEmail}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-mono text-xs border border-zinc-700 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
          <span>{copied ? t.contact.emailCopiedNotice : t.contact.copyEmail}</span>
        </button>

        <a 
          href="https://github.com/AltayAtaman" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-zinc-800 transition-colors"
        >
          <GithubIcon className="w-4 h-4" />
          <span>GitHub</span>
        </a>

        <a 
          href="https://linkedin.com/in/ismailaltayataman" 
          target="_blank" 
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-mono text-xs border border-zinc-800 transition-colors"
        >
          <LinkedinIcon className="w-4 h-4" />
          <span>LinkedIn</span>
        </a>
      </div>

      <div className="pt-8 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4">
        <div>© {new Date().getFullYear()} Ismail Altay Ataman. {t.contact.rights}</div>
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
          <span>{t.contact.deployed}</span>
        </div>
      </div>
    </footer>
  );
}
