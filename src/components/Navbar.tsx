import { Link, useLocation } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { translations, Language } from '../translations';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  latency?: number;
}

export default function Navbar({ lang, toggleLang }: NavbarProps) {
  const location = useLocation();
  const t = translations[lang];

  const handleHomeClick = (e: React.MouseEvent) => {
    if (location.pathname === '/' || location.pathname === '') {
      e.preventDefault();
      window.location.hash = '#hero';
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    if (location.pathname === '/' || location.pathname === '') {
      e.preventDefault();
      window.location.hash = '#contact';
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800/80 bg-[#0d0f12]/90 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" onClick={handleHomeClick} className="flex items-center gap-2 group">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-500 group-hover:scale-125 transition-transform" />
          <span className="font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors">
            Ismail Altay Ataman
          </span>
        </Link>

        <div className="flex items-center gap-4 sm:gap-6 text-sm text-zinc-400">
          <nav className="flex items-center gap-5 sm:gap-6 text-xs sm:text-sm">
            <Link 
              to="/" 
              onClick={handleHomeClick}
              className="text-zinc-300 hover:text-white transition-colors font-medium"
            >
              {lang === 'tr' ? 'Ana Sayfa' : 'Home'}
            </Link>

            <a 
              href="/#contact" 
              onClick={handleContactClick}
              className="text-zinc-400 hover:text-white transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block" />

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition-colors"
            title="Switch Language / Dil Değiştir"
          >
            <Globe className="w-3.5 h-3.5 text-amber-400" />
            <span className={lang === 'en' ? 'text-amber-400 font-semibold' : 'text-zinc-500'}>EN</span>
            <span className="text-zinc-600">/</span>
            <span className={lang === 'tr' ? 'text-amber-400 font-semibold' : 'text-zinc-500'}>TR</span>
          </button>

          {/* Availability Status Badge */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{t.nav.status}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
