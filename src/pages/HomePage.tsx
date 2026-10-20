import { useState, useEffect } from 'react';
import NetworkBackground from '../components/NetworkBackground';
import { 
  Mail, 
  FileDown, 
  ExternalLink, 
  Check, 
  ArrowUpRight, 
  Globe
} from 'lucide-react';
import { translations, Language } from '../translations';

function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" r="2" />
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
  const [activeSection, setActiveSection] = useState('about');
  const t = translations[lang];

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = ['about', 'experience', 'projects', 'skills', 'contact'];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCopyEmail = (isHero: boolean) => {
    navigator.clipboard.writeText('i.altay.ataman@gmail.com');
    if (isHero) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      setContactCopied(true);
      setTimeout(() => setContactCopied(false), 2000);
    }
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const project1 = t.projectSlides[0];
  const project2 = t.projectSlides[1];

  return (
    <div className="relative min-h-screen bg-[#0e1014] text-zinc-400 selection:bg-amber-500/20 selection:text-amber-200 font-sans">
      
      {/* Brittany Chiang signature cursor spotlight */}
      <NetworkBackground />

      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0 relative z-10">
        <div className="lg:flex lg:justify-between lg:gap-8">
          
          {/* ========================================================
              LEFT COLUMN: Fixed Hero & Navigation (Brittany Chiang style)
          ======================================================== */}
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
              {/* Header Title */}
              <h1 className="text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl">
                <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
                  Ismail Altay Ataman
                </a>
              </h1>

              {/* Sub-headline */}
              <h2 className="mt-3 text-lg font-medium tracking-tight text-zinc-200 sm:text-xl">
                {t.hero.badge}
              </h2>

              {/* Short Bio */}
              <p className="mt-4 max-w-xs text-sm leading-normal text-zinc-400">
                {lang === 'tr' 
                  ? 'Gömülü sistemlerden buluta uzanan, sahaya hazır IoT ve tam yığın yazılım mimarileri geliştiriyorum.' 
                  : 'I build field-ready systems from bare metal to the cloud. Specializing in IoT edge architectures, RTOS firmware, and production full-stack systems.'}
              </p>

              {/* In-page Nav with Animated Line */}
              <nav className="nav hidden lg:block mt-16" aria-label="In-page jump links">
                <ul className="w-max space-y-4">
                  {[
                    { id: 'about', label: lang === 'tr' ? 'Hakkımda' : 'About' },
                    { id: 'experience', label: lang === 'tr' ? 'Deneyim & Odak' : 'Experience & Pillars' },
                    { id: 'projects', label: lang === 'tr' ? 'Projeler' : 'Projects' },
                    { id: 'skills', label: lang === 'tr' ? 'Yetkinlikler' : 'Skills' },
                    { id: 'contact', label: lang === 'tr' ? 'İletişim' : 'Contact' },
                  ].map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          onClick={(e) => scrollToSection(e, item.id)}
                          className={`group flex items-center py-1 transition-all ${isActive ? 'nav-active' : ''}`}
                        >
                          <span className="nav-line mr-4 h-px w-8 bg-zinc-600 transition-all group-hover:w-16 group-hover:bg-amber-400" />
                          <span className="nav-text text-xs font-bold uppercase tracking-widest text-zinc-400 transition-colors group-hover:text-zinc-100">
                            {item.label}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            {/* Left Column Bottom: Availability, CV & Socials */}
            <div className="mt-12 lg:mt-0 space-y-5">
              {/* Availability Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>{t.nav.status}</span>
              </div>

              {/* Quick Actions Row */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={t.hero.cvFile}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-zinc-200 text-xs font-mono tap-feedback active:scale-95 transition-all"
                >
                  <FileDown className="w-3.5 h-3.5 text-amber-400" />
                  <span>{t.hero.cvBtn}</span>
                </a>

                {/* Language Switcher */}
                <button
                  onClick={toggleLang}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.08] text-xs font-mono text-zinc-300 tap-feedback active:scale-95 transition-all"
                  title="Switch Language / Dil Değiştir"
                >
                  <Globe className="w-3.5 h-3.5 text-amber-400" />
                  <span className={lang === 'en' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>EN</span>
                  <span className="text-zinc-400">/</span>
                  <span className={lang === 'tr' ? 'text-amber-400 font-semibold' : 'text-zinc-400'}>TR</span>
                </button>
              </div>

              {/* Social Icons */}
              <ul className="flex items-center gap-5 pt-2" aria-label="Social media">
                <li>
                  <a
                    href="https://github.com/AltayAtaman"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-zinc-400 hover:text-zinc-100 transition-colors"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/ismailaltayataman"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-zinc-400 hover:text-zinc-100 transition-colors"
                    aria-label="LinkedIn (opens in a new tab)"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </li>
                <li>
                  <button
                    onClick={() => handleCopyEmail(true)}
                    className="block text-zinc-400 hover:text-amber-400 transition-colors tap-feedback active:scale-90"
                    title={copied ? t.hero.emailCopied : 'i.altay.ataman@gmail.com'}
                    aria-label="Copy Email"
                  >
                    {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Mail className="w-5 h-5" />}
                  </button>
                </li>
              </ul>
            </div>
          </header>

          {/* ========================================================
              RIGHT COLUMN: Scrollable Content (About, Experience, Projects, Skills, Contact)
          ======================================================== */}
          <main className="pt-24 lg:w-1/2 lg:py-24 space-y-24">

            {/* ----------------------------------------------------
                SECTION 1: About
            ---------------------------------------------------- */}
            <section id="about" className="scroll-mt-16 lg:scroll-mt-24 space-y-4" aria-label="About me">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0e1014]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  {lang === 'tr' ? 'Hakkımda' : 'About'}
                </h2>
              </div>

              <p className="leading-relaxed text-zinc-300">
                {t.hero.bio}
              </p>

              <p className="leading-relaxed text-zinc-400 text-sm">
                {lang === 'tr' 
                  ? 'Yıldız Teknik Üniversitesi Mekatronik Mühendisliği mezuniyetimle, donanım düzeyindeki sinyal kontrollerinden dağıtık bulut servislerine kadar uzanan bütüncül bir mühendislik perspektifine sahibim. Kritik sistemlerde hata toleransı, sıfır bulut bağımlılığı ve deterministik tepki süreleri odağımda yer alır.'
                  : 'Graduating in Mechatronics Engineering from Yıldız Technical University gave me an end-to-end perspective that spans physical hardware signal integrity to distributed cloud backends. My work emphasizes fault-tolerant architectures, offline-first reliability, and deterministic latency.'}
              </p>

              <p className="leading-relaxed text-zinc-400 text-sm">
                {lang === 'tr'
                  ? 'Şu anda gerçek zamanlı LAN senkronizasyonu sağlayan yerel POS otomasyon sistemleri ve uç birimde çalışan yapay zeka analiz platformları geliştiriyorum.'
                  : 'Currently, I focus on local-first POS automation engines syncing over isolated Wi-Fi LAN sockets and sub-second edge AI inference platforms.'}
              </p>
            </section>

            {/* ----------------------------------------------------
                SECTION 2: Experience & Engineering Pillars
            ---------------------------------------------------- */}
            <section id="experience" className="scroll-mt-16 lg:scroll-mt-24 space-y-6" aria-label="Work experience">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0e1014]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  {lang === 'tr' ? 'Deneyim & Odak' : 'Experience & Pillars'}
                </h2>
              </div>

              <ol className="group/list space-y-8">
                {/* Item 1 */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:col-span-2">
                      2022 — {lang === 'tr' ? 'GÜNÜMÜZ' : 'PRESENT'}
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-200">
                        <div>
                          <span className="inline-flex items-baseline text-zinc-100 font-semibold">
                            {lang === 'tr' ? 'IoT & Gömülü Sistemler Mühendisliği' : 'IoT & Embedded Systems Engineer'}
                          </span>
                        </div>
                        <div className="text-xs text-amber-400/90 font-mono mt-0.5">
                          Telemetri & Donanım Protokolleri
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-zinc-400">
                        {lang === 'tr'
                          ? 'Çok düğümlü endüstriyel CAN bus (J1939) ağları, hücresel OTA güncelleme altyapıları ve FreeRTOS tabanlı görev zamanlayıcıları geliştirme. ESP32 ve STM32 mimarilerinde düşük güç tüketimi ve kararlı saha operasyonu.'
                          : 'Engineered multi-node industrial CAN bus (J1939) networks, fail-safe cellular OTA update pipelines, and FreeRTOS task scheduling engines. Optimized firmware on ESP32 & STM32 targets for long-term field stability.'}
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                        {['C / C++', 'FreeRTOS', 'ESP-IDF & STM32', 'CAN Bus', 'MQTT', 'Cellular OTA', 'Embedded Linux'].map((t) => (
                          <li key={t} className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-mono text-amber-300">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:col-span-2">
                      2023 — {lang === 'tr' ? 'GÜNÜMÜZ' : 'PRESENT'}
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-200">
                        <div>
                          <span className="inline-flex items-baseline text-zinc-100 font-semibold">
                            {lang === 'tr' ? 'Uç Birim & Full-Stack Sistem Mimarisi' : 'Edge & Full-Stack Core Architecture'}
                          </span>
                        </div>
                        <div className="text-xs text-amber-400/90 font-mono mt-0.5">
                          Offline-First & Dağıtık Servisler
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-zinc-400">
                        {lang === 'tr'
                          ? 'İnternet kesintilerine dayanıklı yerel Node.js + SQLite çekirdeği, yerel ağda WebSocket ile senkronize çalışan Flutter garson terminalleri ve ESC/POS termal fiş yazdırma mimarileri geliştirme.'
                          : 'Architected ISP-outage-resilient local Node.js + SQLite cores, syncing with Flutter handheld waiter terminals over local Wi-Fi WebSocket channels and managing ESC/POS thermal printing queues.'}
                      </p>

                      <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                        {['Node.js', 'React 18', 'TypeScript', 'Python / FastAPI', 'AWS Lambda', 'DynamoDB', 'SQLite', 'Flutter'].map((t) => (
                          <li key={t} className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-mono text-amber-300">
                            {t}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="mb-12">
                  <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
                    
                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-400 sm:col-span-2">
                      2018 — 2023
                    </header>

                    <div className="z-10 sm:col-span-6">
                      <h3 className="font-medium leading-snug text-zinc-200">
                        <div>
                          <span className="inline-flex items-baseline text-zinc-100 font-semibold">
                            Yıldız Technical University
                          </span>
                        </div>
                        <div className="text-xs text-zinc-400 mt-0.5">
                          {lang === 'tr' ? 'Mekatronik Mühendisliği Lisans' : 'B.Sc. in Mechatronics Engineering'}
                        </div>
                      </h3>

                      <p className="mt-2 text-sm leading-normal text-zinc-400">
                        {lang === 'tr'
                          ? 'Kontrol teorisi, mikroişlemcili sistemler, robotik manipülatörler ve gömülü donanım tasarımı üzerine kapsamlı mühendislik eğitimi.'
                          : 'Comprehensive engineering curriculum covering feedback control theory, microprocessor architecture, robotics, and embedded hardware design.'}
                      </p>
                    </div>
                  </div>
                </li>
              </ol>
            </section>

            {/* ----------------------------------------------------
                SECTION 3: Featured Projects (Brittany Chiang card style)
            ---------------------------------------------------- */}
            <section id="projects" className="scroll-mt-16 lg:scroll-mt-24 space-y-6" aria-label="Selected projects">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0e1014]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  {lang === 'tr' ? 'Projeler' : 'Projects'}
                </h2>
              </div>

              <ul className="group/list space-y-12">
                {/* Project 1 */}
                {project1 && (
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
                      
                      {/* Metric column */}
                      <div className="z-10 sm:col-span-2">
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-center">
                          <span className="block text-[10px] font-mono text-zinc-400 uppercase">Sync</span>
                          <span className="block text-xs font-bold text-amber-400 font-mono mt-0.5">&lt;5ms LAN</span>
                          <span className="block text-[10px] font-mono text-zinc-400 uppercase mt-2">Cloud</span>
                          <span className="block text-xs font-bold text-zinc-200 font-mono">0% Req.</span>
                        </div>
                      </div>

                      {/* Content column */}
                      <div className="z-10 sm:col-span-6 space-y-2">
                        <h3 className="font-medium leading-snug text-zinc-200">
                          <a
                            href={project1.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-baseline font-semibold leading-tight text-zinc-100 hover:text-amber-400 focus-visible:text-amber-400 group/link text-base"
                          >
                            <span>{project1.title}</span>
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                          </a>
                          <div className="text-xs text-zinc-400 mt-0.5">
                            {project1.subtitle}
                          </div>
                        </h3>

                        <p className="text-sm leading-normal text-zinc-400">
                          {project1.description}
                        </p>

                        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
                          {project1.tech.map((t) => (
                            <li key={t} className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-mono text-amber-300">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                )}

                {/* Project 2 */}
                {project2 && (
                  <li className="mb-12">
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-2xl transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/[0.03] lg:group-hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]" />
                      
                      {/* Metric column */}
                      <div className="z-10 sm:col-span-2">
                        <div className="rounded-xl border border-white/[0.08] bg-white/[0.02] p-3 text-center">
                          <span className="block text-[10px] font-mono text-zinc-400 uppercase">Inference</span>
                          <span className="block text-xs font-bold text-amber-400 font-mono mt-0.5">~50ms</span>
                          <span className="block text-[10px] font-mono text-zinc-400 uppercase mt-2">Fallback</span>
                          <span className="block text-xs font-bold text-zinc-200 font-mono">5-Tier</span>
                        </div>
                      </div>

                      {/* Content column */}
                      <div className="z-10 sm:col-span-6 space-y-2">
                        <h3 className="font-medium leading-snug text-zinc-200">
                          <a
                            href={project2.externalUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-baseline font-semibold leading-tight text-zinc-100 hover:text-amber-400 focus-visible:text-amber-400 group/link text-base"
                          >
                            <span>{project2.title}</span>
                            <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" />
                          </a>
                          <div className="text-xs text-zinc-400 mt-0.5">
                            {project2.subtitle}
                          </div>
                        </h3>

                        <p className="text-sm leading-normal text-zinc-400">
                          {project2.description}
                        </p>

                        <ul className="mt-2 flex flex-wrap gap-1.5" aria-label="Technologies used">
                          {project2.tech.map((t) => (
                            <li key={t} className="rounded-full bg-amber-400/10 px-3 py-1 text-xs font-mono text-amber-300">
                              {t}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </li>
                )}
              </ul>
            </section>

            {/* ----------------------------------------------------
                SECTION 4: Technical Skills
            ---------------------------------------------------- */}
            <section id="skills" className="scroll-mt-16 lg:scroll-mt-24 space-y-6" aria-label="Technical skills">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0e1014]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  {lang === 'tr' ? 'Yetkinlikler' : 'Skills'}
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-3">
                    {lang === 'tr' ? 'Gömülü & Donanım Seviyesi' : 'Firmware & Low-Level'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['C / C++', 'FreeRTOS', 'ESP-IDF', 'STM32', 'Embedded Linux', 'Bare-Metal', 'Task Scheduling', 'DMA / Timers'].map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-3">
                    {lang === 'tr' ? 'Haberleşme Protokolleri' : 'Protocols & Connectivity'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['CAN Bus (J1939)', 'MQTT & Mosquitto', 'Cellular & OTA', 'UART / SPI / I2C', 'LAN WebSocket', 'ESC/POS'].map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-200 mb-3">
                    {lang === 'tr' ? 'Bulut & Full-Stack' : 'Cloud & Full-Stack Core'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {['Node.js', 'React 18', 'TypeScript', 'Python / FastAPI', 'AWS Lambda & DynamoDB', 'SQLite', 'Flutter', 'Tailwind CSS'].map((item) => (
                      <span key={item} className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] text-xs font-mono text-zinc-300">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ----------------------------------------------------
                SECTION 5: Contact
            ---------------------------------------------------- */}
            <section id="contact" className="scroll-mt-16 lg:scroll-mt-24 space-y-6" aria-label="Contact">
              <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-[#0e1014]/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-zinc-200">
                  {lang === 'tr' ? 'İletişim' : 'Contact'}
                </h2>
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8 space-y-5">
                <h3 className="text-2xl font-bold tracking-tight text-zinc-100">
                  {t.contact.heading}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400">
                  {t.contact.desc}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <button
                    onClick={() => handleCopyEmail(false)}
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs font-mono tap-feedback active:scale-95 transition-all min-w-[145px]"
                  >
                    {contactCopied ? <Check className="w-4 h-4 text-emerald-400 shrink-0" /> : <Mail className="w-4 h-4 shrink-0" />}
                    <span>{contactCopied ? t.contact.emailCopiedNotice : t.contact.copyEmail}</span>
                  </button>

                  <a
                    href="mailto:i.altay.ataman@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-zinc-300 hover:text-white transition-all"
                  >
                    <span>i.altay.ataman@gmail.com</span>
                    <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
                  </a>
                </div>
              </div>
            </section>

            {/* Footer */}
            <footer className="pt-12 text-xs font-mono text-zinc-400 space-y-2">
              <p>
                {lang === 'tr'
                  ? 'Brittany Chiang açık kaynak portfolyo tasarımından esinlenilmiştir. React & Tailwind CSS ile geliştirilmiştir.'
                  : 'Inspired by Brittany Chiang\'s open-source portfolio design. Built with React & Tailwind CSS.'}
              </p>
              <div className="flex items-center justify-between pt-2 border-t border-white/[0.04]">
                <span>© {new Date().getFullYear()} Ismail Altay Ataman</span>
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Cloudflare Pages</span>
                </span>
              </div>
            </footer>

          </main>
        </div>
      </div>
    </div>
  );
}
