import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { Spotlight } from '@/components/ui/spotlight';
import { cn } from '@/lib/utils';
import { 
  Mail, 
  Terminal, 
  ArrowRight, 
  Check, 
  FileDown,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { translations, Language, ProjectSlide } from '../translations';

interface SlideItem {
  id: string;
  label: string;
}

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

interface HomePageProps {
  lang: Language;
  toggleLang: () => void;
  latency?: number;
}

export default function HomePage({ lang, toggleLang }: HomePageProps) {
  const [copied, setCopied] = useState(false);
  const [contactCopied, setContactCopied] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const t = translations[lang];

  // Memoize slides list to prevent recreation on each render
  const slides: SlideItem[] = useMemo(() => [
    { id: 'hero', label: t.nav.slides.intro },
    ...t.projectSlides.map((p: ProjectSlide) => ({ id: `project-${p.id}`, label: p.title })),
    { id: 'contact', label: t.nav.slides.contact }
  ], [t]);

  const totalSlides = slides.length;

  const scrollToSlide = useCallback((index: number) => {
    if (!containerRef.current) return;
    const targetIndex = Math.max(0, Math.min(index, totalSlides - 1));
    const slideElement = containerRef.current.children[targetIndex] as HTMLElement;
    if (slideElement) {
      slideElement.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
    }
  }, [totalSlides]);

  // Update active slide on horizontal scroll
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const handleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const scrollPosition = container.scrollLeft;
        const width = container.clientWidth;
        if (width > 0) {
          const index = Math.round(scrollPosition / width);
          setActiveSlide(Math.max(0, Math.min(index, totalSlides - 1)));
        }
      }, 50);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [totalSlides]);

  // Handle URL hash changes only when hash changes or on first mount
  const initialHashHandled = useRef(false);
  useEffect(() => {
    const handleTargetHash = (hashStr: string) => {
      const cleanHash = hashStr.replace('#', '');
      if (!cleanHash) return;
      const targetIndex = slides.findIndex((s: SlideItem) => s.id === cleanHash);
      if (targetIndex !== -1) {
        scrollToSlide(targetIndex);
      }
    };

    // On initial mount only, handle hash if present, then clear to avoid trapping the user
    if (!initialHashHandled.current) {
      initialHashHandled.current = true;
      if (window.location.hash) {
        setTimeout(() => {
          handleTargetHash(window.location.hash);
          if (window.history.replaceState) {
            window.history.replaceState(null, '', window.location.pathname);
          }
        }, 150);
      }
    }

    const onHashChange = () => {
      handleTargetHash(window.location.hash);
      if (window.history.replaceState) {
        window.history.replaceState(null, '', window.location.pathname);
      }
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [slides, scrollToSlide]);

  // Keyboard navigation for presentation slides: Left / Right arrows
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowRight', 'PageDown', ' '].includes(e.key)) {
        e.preventDefault();
        scrollToSlide(activeSlide + 1);
      } else if (['ArrowLeft', 'PageUp'].includes(e.key)) {
        e.preventDefault();
        scrollToSlide(activeSlide - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        scrollToSlide(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        scrollToSlide(totalSlides - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeSlide, scrollToSlide, totalSlides]);

  const handleCopyHeroEmail = () => {
    navigator.clipboard.writeText('i.altay.ataman@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyContactEmail = () => {
    navigator.clipboard.writeText('i.altay.ataman@gmail.com');
    setContactCopied(true);
    setTimeout(() => setContactCopied(false), 2000);
  };

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-[#0a0c10] text-zinc-200 font-sans selection:bg-amber-500/25 selection:text-amber-200 antialiased">
      
      {/* Precision CAD Blueprint Grid Background */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 [background-size:40px_40px] select-none z-0",
          "[background-image:linear-gradient(to_right,#171b22_1px,transparent_1px),linear-gradient(to_bottom,#171b22_1px,transparent_1px)]",
          "[mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_70%,transparent_100%)]"
        )}
      />

      {/* Primary White Spotlight (Top-Left Focal Illumination) */}
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />

      {/* Secondary Subtle Amber Accent Spotlight (Edge Hardware Glow) */}
      <Spotlight
        className="-top-20 right-0 md:top-10 md:-right-20 opacity-[0.05]"
        fill="#f59e0b"
      />

      {/* Fixed Persistent Header */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar lang={lang} toggleLang={toggleLang} />
      </div>

      {/* Edge Navigation: Floating Left Arrow */}
      <button
        onClick={() => scrollToSlide(activeSlide - 1)}
        disabled={activeSlide === 0}
        aria-label={t.projects.prevSlide}
        className={`fixed left-3 sm:left-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-md text-zinc-300 hover:text-white hover:border-amber-500/50 hover:bg-zinc-900 transition-all shadow-2xl ${
          activeSlide === 0 
            ? 'opacity-0 pointer-events-none' 
            : 'opacity-100 scale-100 hover:scale-110'
        }`}
        title={t.projects.prevSlide}
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Edge Navigation: Floating Right Arrow */}
      <button
        onClick={() => scrollToSlide(activeSlide + 1)}
        disabled={activeSlide === totalSlides - 1}
        aria-label={t.projects.nextSlide}
        className={`fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-40 p-2.5 sm:p-3 rounded-full bg-zinc-950/80 border border-zinc-800/90 backdrop-blur-md text-zinc-300 hover:text-white hover:border-amber-500/50 hover:bg-zinc-900 transition-all shadow-2xl ${
          activeSlide === totalSlides - 1 
            ? 'opacity-0 pointer-events-none' 
            : 'opacity-100 scale-100 hover:scale-110'
        }`}
        title={t.projects.nextSlide}
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Bottom Center Floating Slide Dots & Counter */}
      <nav 
        aria-label="Slide Navigation"
        className="fixed bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-3.5 px-4 py-2 rounded-full bg-zinc-950/85 border border-zinc-800/90 backdrop-blur-md shadow-2xl"
      >
        {/* Horizontal Dots */}
        <div className="flex items-center gap-2">
          {slides.map((slide: SlideItem, idx: number) => {
            const isActive = activeSlide === idx;
            return (
              <button
                key={slide.id}
                onClick={() => scrollToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.label}`}
                className="group relative flex items-center justify-center p-1 focus:outline-none"
              >
                <span 
                  className={`transition-all duration-300 rounded-full ${
                    isActive 
                      ? 'w-6 h-2 bg-amber-400 ring-2 ring-amber-400/30' 
                      : 'w-2 h-2 bg-zinc-600 hover:bg-zinc-400 group-hover:scale-125'
                  }`}
                />
                {/* Tooltip on hover */}
                <span className="absolute bottom-7 px-2 py-1 rounded bg-zinc-900 border border-zinc-700 text-[11px] font-mono text-zinc-300 whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity shadow-lg">
                  {slide.label}
                </span>
              </button>
            );
          })}
        </div>

        <div className="h-3 w-[1px] bg-zinc-800" />

        {/* Slide Counter */}
        <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400">
          <span className="text-amber-400 font-bold">
            {String(activeSlide + 1).padStart(2, '0')}
          </span>
          <span className="text-zinc-600">/</span>
          <span>{String(totalSlides).padStart(2, '0')}</span>
        </div>

        <span className="hidden md:inline-block text-[10px] font-mono text-zinc-500 pl-1 border-l border-zinc-800">
          [← / →]
        </span>
      </nav>

      {/* Fullscreen Horizontal Snap Slides Container */}
      <div 
        ref={containerRef}
        className="h-full w-full flex flex-row overflow-x-auto snap-x snap-mandatory scroll-smooth focus:outline-none"
        style={{ scrollbarWidth: 'none' }}
        tabIndex={0}
      >

        {/* ========================================================
            SLIDE 0: Hero / Intro
        ======================================================== */}
        <section 
          id="hero"
          className="w-screen min-w-full h-full snap-start snap-always shrink-0 flex flex-col justify-between pt-20 sm:pt-24 pb-16 px-8 sm:px-16 max-w-5xl mx-auto relative overflow-y-auto"
        >
          <div className="my-auto space-y-6 sm:space-y-8 w-full max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs font-mono text-zinc-400">
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>{t.hero.badge}</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
                {t.hero.headlinePrefix}
                <span className="text-amber-400">{t.hero.silicon}</span>
                {t.hero.headlineMiddle}
                <span className="text-amber-400">{t.hero.cloud}</span>
                {t.hero.headlineSuffix}
              </h1>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                {t.hero.bio}
              </p>
            </div>

            {/* Horizontal Skill Tags Strip */}
            <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
              {t.hero.skills.map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-800 text-zinc-300"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="/ismail_altay_ataman_cv.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
              >
                <FileDown className="w-4 h-4" />
                <span>{t.hero.cvBtn}</span>
              </a>

              <div className="h-6 w-[1px] bg-zinc-800 mx-2 hidden sm:block" />

              {/* Quick Social Links */}
              <div className="flex items-center gap-2.5">
                <a 
                  href="https://github.com/AltayAtaman" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="GitHub - AltayAtaman"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  title="GitHub: @AltayAtaman"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com/in/ismailaltayataman" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn - ismailaltayataman"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors"
                  title="LinkedIn: @ismailaltayataman"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <button 
                  onClick={handleCopyHeroEmail}
                  aria-label="Copy Email"
                  className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700 transition-colors flex items-center gap-1.5 text-xs font-mono"
                  title="i.altay.ataman@gmail.com"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                  <span className="hidden sm:inline">{copied ? t.hero.emailCopied : t.hero.emailBtn}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SLIDES 1..N: Project Slides (Modular)
        ======================================================== */}
        {t.projectSlides.map((project: ProjectSlide, pIndex: number) => {
          const slideIndex = 1 + pIndex;
          const isCurrent = activeSlide === slideIndex;

          return (
            <section
              key={project.id}
              id={`project-${project.id}`}
              className="w-screen min-w-full h-full snap-start snap-always shrink-0 flex flex-col justify-center items-center pt-20 pb-16 px-6 sm:px-16 relative overflow-y-auto"
            >
              {/* Slide Card Container */}
              <div className={`relative w-full max-w-4xl rounded-2xl border bg-gradient-to-br from-zinc-900/70 via-zinc-900/40 to-zinc-950/80 p-6 sm:p-10 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-500 ${
                isCurrent ? 'border-amber-500/40 shadow-amber-500/10' : 'border-zinc-800/90'
              }`}>
                
                {/* Ambient glow accent */}
                <div className="pointer-events-none absolute -top-20 -right-20 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl" />
                <div className="pointer-events-none absolute -bottom-20 -left-20 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

                <div className="space-y-6 sm:space-y-8 relative z-10">
                  
                  {/* Top Slide Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-zinc-800/80 pb-4">
                    <div className="flex items-center gap-2.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                      <span className="text-xs font-mono text-amber-400 font-semibold tracking-wider uppercase">
                        {project.tag}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 font-mono text-xs text-zinc-500">
                      <Layers className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{t.projects.projectCountPrefix} {String(pIndex + 1).padStart(2, '0')} / {String(t.projectSlides.length).padStart(2, '0')}</span>
                    </div>
                  </div>

                  {/* Main Title & Subtitle */}
                  <div className="space-y-3">
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-3">
                      <span>{project.title}</span>
                      <span className="text-amber-400 text-lg sm:text-2xl font-normal font-mono opacity-80">
                        / 0{pIndex + 1}
                      </span>
                    </h2>
                    <p className="text-lg sm:text-xl text-zinc-300 font-medium">
                      {project.subtitle}
                    </p>
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-light max-w-3xl">
                      {project.description}
                    </p>
                  </div>

                  {/* Architecture Metrics Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
                    {project.metrics.map((metric) => (
                      <div 
                        key={metric.label}
                        className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800/80 flex flex-col justify-between"
                      >
                        <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">{metric.label}</span>
                        <span className="text-base sm:text-lg font-bold text-amber-400 mt-1">{metric.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Badges */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-500">
                      <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                      <span>Core Stack & Protocols</span>
                    </div>
                    <div className="flex flex-wrap gap-2 font-mono text-xs">
                      {project.tech.map((techItem) => (
                        <span 
                          key={techItem}
                          className="px-2.5 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-zinc-200"
                        >
                          {techItem}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar */}
                  <div className="pt-2 flex flex-wrap items-center gap-4">
                    {project.externalUrl ? (
                      <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{t.projects.viewCaseStudy}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : project.caseStudyUrl ? (
                      <Link
                        to={project.caseStudyUrl}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{t.projects.viewCaseStudy}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    ) : null}
                  </div>

                </div>
              </div>
            </section>
          );
        })}

        {/* ========================================================
            FINAL SLIDE: Contact & Footer
        ======================================================== */}
        <section 
          id="contact"
          className="w-screen min-w-full h-full snap-start snap-always shrink-0 flex flex-col justify-between pt-24 pb-16 px-8 sm:px-16 max-w-5xl mx-auto relative overflow-y-auto"
        >
          <div className="my-auto space-y-8 max-w-3xl mx-auto w-full">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/50 border border-zinc-700/50 text-xs font-mono text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{t.nav.status}</span>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight">
                {t.contact.heading}
              </h2>
              <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
                {t.contact.desc}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={handleCopyContactEmail}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-sm transition-all shadow-lg shadow-amber-500/20"
              >
                {contactCopied ? <Check className="w-4 h-4 text-emerald-400" /> : <Mail className="w-4 h-4" />}
                <span>{contactCopied ? t.contact.emailCopiedNotice : t.contact.copyEmail}</span>
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
          </div>

          {/* Persistent Footer Line */}
          <div className="pt-6 border-t border-zinc-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-zinc-600 gap-4 w-full max-w-3xl mx-auto">
            <div>© {new Date().getFullYear()} Ismail Altay Ataman. {t.contact.rights}</div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>{t.contact.deployed}</span>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
