import { Globe } from 'lucide-react';
import { translations, Language } from '../translations';

interface NavbarProps {
  lang: Language;
  toggleLang: () => void;
  latency?: number;
}

export default function Navbar({ lang, toggleLang }: NavbarProps) {
  const t = translations[lang];

  const handleNavigate = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 apple-glass transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button 
          onClick={(e) => handleNavigate(e, 'about')} 
          className="flex items-center gap-2.5 group tap-feedback active:scale-[0.98] text-left"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 group-hover:scale-125 transition-transform duration-200" />
          <span className="font-semibold tracking-tight text-white group-hover:text-amber-400 transition-colors duration-200">
            Ismail Altay Ataman
          </span>
        </button>

        <div className="flex items-center gap-4 sm:gap-6 text-sm text-zinc-400">
          <nav className="hidden md:flex items-center gap-1.5 text-xs sm:text-sm">
            <button
              onClick={(e) => handleNavigate(e, 'about')}
              className="px-3 py-1.5 rounded-lg text-zinc-300 hover:text-white hover:bg-white/[0.04] tap-feedback active:scale-95 transition-all font-medium"
            >
              {lang === 'tr' ? 'Hakkımda' : 'About'}
            </button>

            <button 
              onClick={(e) => handleNavigate(e, 'projects')}
              className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] tap-feedback active:scale-95 transition-all"
            >
              {lang === 'tr' ? 'Projeler' : 'Projects'}
            </button>

            <button 
              onClick={(e) => handleNavigate(e, 'skills')}
              className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] tap-feedback active:scale-95 transition-all"
            >
              {lang === 'tr' ? 'Yetkinlikler' : 'Skills'}
            </button>

            <button 
              onClick={(e) => handleNavigate(e, 'contact')}
              className="px-3 py-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-white/[0.04] tap-feedback active:scale-95 transition-all"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="h-4 w-[1px] bg-white/[0.08] hidden sm:block" />

          {/* Language Switcher */}
          <button
            onClick={toggleLang}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-white/[0.08] hover:border-white/[0.16] text-xs font-mono text-zinc-300 tap-feedback active:scale-95 transition-all shadow-sm"
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
