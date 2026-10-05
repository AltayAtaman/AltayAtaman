import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Language } from '../translations';
import { 
  Zap, 
  ShieldCheck, 
  Sparkles, 
  Terminal, 
  ExternalLink, 
  Quote, 
  Cpu, 
  Lock, 
  Play, 
  Gauge, 
  Bot, 
  Globe2, 
  Workflow 
} from 'lucide-react';

interface GradeMyJobPageProps {
  lang: Language;
  toggleLang: () => void;
  latency: number;
}

function GithubIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export default function GradeMyJobPage({ lang, toggleLang, latency }: GradeMyJobPageProps) {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const isTr = lang === 'tr';

  const architectureAscii = `[ Job Board DOM ] (LinkedIn / Indeed / WWR)
       │
       ▼ (Scraped via Content Script DOM Parsers)
[ Content Script / Background Worker ]
       │
       ├───► [ Local Edge Mode ] ────► Local FastAPI Decision Server (Laya @ 127.0.0.1:8000)
       │                               ├── Parallel Track & Seniority Classifier (~50ms)
       │                               └── Dealbreaker & Domain Disqualification Engine
       │
       └───► [ Cloud AI Mode ] ──────► AWS API Gateway (eu-north-1)
                                       │
                                       ▼
                              AWS Lambda Worker
                               ├── Google OAuth Token Verifier & Session Signer
                               ├── DynamoDB Atomic 2PC Reservation (TransactWrite)
                               └── Multi-Model LLM Waterfall Engine (Gemini / OpenAI)
                                       │
                                       ▼
[ Persistent Local Cache ] ◄─── Normalized DecodedJobAnalysis Payload
       │
       ▼
[ React 18 Side Panel UI ] (Scoring Gauge, Tech Stack Badges, Jargon Buster, Batch Automation)`;

  return (
    <div className="min-h-screen bg-[#0a0c10] text-zinc-200 font-sans selection:bg-amber-500/25 selection:text-amber-200 flex flex-col justify-between">
      
      {/* Shared Persistent Header */}
      <Navbar lang={lang} toggleLang={toggleLang} latency={latency} />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-12 sm:py-16 space-y-24 w-full flex-1">
        
        {/* Project Context Sub-bar */}
        <div className="border-b border-zinc-800/80 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
              {isTr ? 'Özel Proje Sayfası' : 'Special Project Showcase'}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400">GradeMyJob (JobDecode)</span>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="https://github.com/AltayAtaman/JobDecode" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300">
              <Bot className="w-3.5 h-3.5 text-cyan-400" />
              <span>Client-Side AI & Serverless</span>
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-cyan-400 text-xs font-mono">
                <Zap className="w-3.5 h-3.5 text-cyan-400" />
                <span>{isTr ? 'Sub-Second Edge Triage & AWS Serverless' : 'Sub-Second Edge Triage & AWS Serverless'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                GradeMyJob: <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400">
                  {isTr ? 'Yapay Zekâ Destekli İlan Analitiği' : 'Real-Time Job Fit Intelligence'}
                </span>
              </h1>

              {/* Motto Box */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900/90 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                <Quote className="w-3.5 h-3.5 text-cyan-400 rotate-180" />
                <span className="font-mono text-cyan-300">
                  {isTr 
                    ? 'Başvurmadan önce uyumunu gör: Edge triage ve sunucusuz yapay zekâ' 
                    : 'See your fit before applying: edge triage paired with serverless LLMs'}
                </span>
                <Quote className="w-3.5 h-3.5 text-cyan-400" />
              </div>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                {isTr 
                  ? 'GradeMyJob, LinkedIn ve Indeed gibi platformlardaki iş ilanlarını gerçek zamanlı ayrıştırıp teknik yığınları, zorunlu kriterleri ve kurumsal jargonu aday profiliyle eşleştiren bir tarayıcı eklentisidir. Lokal karar motoru (FastAPI/Laya) ve AWS sunucusuz mimarisiyle sıfır gecikmeli aday uyum puanlaması ve otomasyon sunar.'
                  : 'GradeMyJob eliminates job-hunt fatigue by extracting technical stacks, categorizing hard vs. preferred qualifications, and scoring candidate-role fit in real time. It unifies an offline-first browser extension with a local micro-decision engine (FastAPI/Laya) and a fault-tolerant AWS Serverless backend with atomic quota management.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="https://github.com/AltayAtaman/JobDecode" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>{isTr ? 'Kaynak Kodunu İncele' : 'View Source on GitHub'}</span>
                </a>

                <a 
                  href="#mimari" 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700/80 text-white font-medium text-xs sm:text-sm transition-all"
                >
                  <Terminal className="w-4 h-4 text-cyan-400" />
                  <span>{isTr ? 'Sistem Mimarisi' : 'System Architecture'}</span>
                </a>
              </div>

              {/* Metrics Strip */}
              <div className="pt-4 grid grid-cols-3 gap-4 border-t border-zinc-800/80">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-cyan-400">~50ms</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{isTr ? 'Edge Çıkarım Gecikmesi' : 'Edge Inference Latency'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">5-Tier</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{isTr ? 'Model Hata Toleransı' : 'Model Fallback Chain'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">0%</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{isTr ? 'Lokal Modda Bulut Şartı' : 'Cloud Dependency (Local)'}</div>
                </div>
              </div>

            </div>

            {/* Right Column Visual / Feature Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60 shadow-2xl group">
                <img 
                  src="/projects/grademyjob/f_score.png" 
                  alt="GradeMyJob Match Score Gauge" 
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-zinc-950/85 border border-zinc-800/90 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <Gauge className="w-4 h-4 text-cyan-400" />
                    <div>
                      <div className="text-xs font-semibold text-white">Dynamic Fit Gauge</div>
                      <div className="text-[10px] text-zinc-400 font-mono">Normalized ATS Scoring & Track Fit</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                    REAL-TIME
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="mt-4 sm:absolute sm:-bottom-4 sm:-left-6 bg-zinc-900 border border-zinc-800 rounded-xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {isTr ? 'Paralel Edge Karar Motoru' : 'Dual-Stage Edge Triage'}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {isTr ? 'FastAPI & Chrome window.ai' : 'FastAPI Local Core & WebExtension'}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* Video Showcase Section */}
        <section className="space-y-6 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <Play className="w-3.5 h-3.5" />
              <span>{isTr ? 'Canlı Demo & Video İnceleme' : 'Interactive Demo & Walkthrough'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? 'Tarayıcıda Çalışırken İzleyin' : 'Watch GradeMyJob in Action'}
            </h2>
          </div>

          <div className="rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-950 shadow-2xl relative">
            <video 
              controls 
              playsInline 
              className="w-full max-h-[540px] bg-black object-contain mx-auto"
              poster="/projects/grademyjob/f_batch.png"
              onPlay={() => setVideoPlaying(true)}
              onPause={() => setVideoPlaying(false)}
            >
              <source src="/projects/grademyjob/jobdecode-promo-music.mp4" type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
            {!videoPlaying && (
              <div className="absolute top-4 right-4 pointer-events-none px-3 py-1 rounded-md bg-zinc-900/90 border border-zinc-700 text-xs font-mono text-zinc-300">
                1080p • Audio Included
              </div>
            )}
          </div>
        </section>

        {/* Architecture Section */}
        <section id="mimari" className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTr ? 'Sistem Mimarisi' : 'System Architecture'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? 'Uçtan Uca Dağıtık Pipeline Mimarisi' : 'End-to-End Distributed Pipeline Architecture'}
            </h2>
            <p className="text-zinc-400 text-sm max-w-2xl font-light">
              {isTr 
                ? 'İstemci tarafında DOM kazıma ve yerel Python karar motorundan, AWS API Gateway ve çoklu model LLM çağlayanına uzanan dayanıklı veri akışı.'
                : 'A resilient data pipeline spanning client-side DOM parsing, local Python triage engines, and AWS Serverless waterfall LLMs.'}
            </p>
          </div>

          {/* ASCII Architecture Terminal Card */}
          <div className="rounded-2xl border border-zinc-800 bg-[#0d1017] shadow-2xl overflow-hidden">
            <div className="px-4 py-3 bg-zinc-900/80 border-b border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-zinc-400">pipeline_architecture.diag</span>
              </div>
              <span className="text-[11px] font-mono text-cyan-400">AWS eu-north-1 & Localhost:8000</span>
            </div>
            <div className="p-4 sm:p-6 overflow-x-auto">
              <pre className="font-mono text-xs sm:text-sm text-cyan-300/90 leading-relaxed">
                {architectureAscii}
              </pre>
            </div>
          </div>
        </section>

        {/* Key Engineering Challenges & Solutions */}
        <section className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isTr ? 'Mühendislik Çözümleri' : 'Engineering Challenges & Solutions'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? 'Zorlu Problemler ve Mimari Kararlar' : 'Tackling Concurrency, Latency & Multi-Browser Support'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: Lock,
                title: isTr ? "Atomik Kota & İdempotent İşlemler" : "Atomic Distributed Quotas & Idempotency",
                desc: isTr 
                  ? "Toplu sayfa taramasında kullanıcı kredilerinin yarış durumunu (race condition) engellemek için DynamoDB TransactWriteCommand ve 150 saniyelik kira kilitleri kullanıldı. SHA-256 içerik hash'leri ile tekrarlanan ilanlarda mükerrer harcama engellenir."
                  : "Rapid batch page scanning creates race conditions on user credits. Implemented reserveCredit via DynamoDB TransactWrite with 150s lease locks, deterministic SHA-256 hashing, and zero-charge deduplication for repeated job views."
              },
              {
                icon: Zap,
                title: isTr ? "İki Aşamalı Sub-Second Triage Pipeline" : "Two-Stage Sub-Second Triage Pipeline",
                desc: isTr 
                  ? "Uyumsuz ilanlarda 2-4 saniyelik bulut LLM gecikmesi ve maliyetini sıfırlamak için yerel evaluateJobWithLaya motoru geliştirildi. Zorunlu kriterler ~50ms içinde filtrelenerek yalnızca geçerli ilanlar buluta iletilir."
                  : "Cloud LLMs incur 2–4s latency and token costs for non-matching listings. Engineered sub-70ms parallel edge triage via evaluateJobWithLaya that verifies candidate track alignment and hard dealbreakers before triggering generative cloud LLMs."
              },
              {
                icon: Globe2,
                title: isTr ? "Çapraz Tarayıcı Derleme Motoru" : "Unified Cross-Browser Manifest Engine",
                desc: isTr 
                  ? "Chrome (MV3 Service Worker & Side Panel) ve Firefox (MV2 Background Script & Sidebar Action) arasındaki mimari farklar WXT ile tek bir TypeScript/React kod tabanından çift dağıtım (.output/chrome-mv3 ve .output/firefox-mv2) olarak derlenir."
                  : "Chrome and Firefox enforce divergent extension architectures (Chromium MV3 vs. Firefox MV2). Utilized WXT to compile a single TypeScript/React codebase into compliant chrome-mv3 and firefox-mv2 distributions with dynamic polyfills."
              }
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 space-y-3 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-light">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Feature Gallery */}
        <section className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
              <Workflow className="w-3.5 h-3.5" />
              <span>{isTr ? 'Görsel Özellikler' : 'Feature Showcase'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? 'Arayüz ve Analiz Modülleri' : 'Interface & Automation Modules'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900">
                <img 
                  src="/projects/grademyjob/f_batch.png" 
                  alt="Batch Job Scanner" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="font-semibold text-white text-sm">Batch Page Automation</div>
              <div className="text-xs text-zinc-400">Scans dozens of open listings on LinkedIn and ranks candidate alignment automatically.</div>
            </div>

            <div className="space-y-2">
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-xl bg-zinc-900">
                <img 
                  src="/projects/grademyjob/f_hook.png" 
                  alt="In-Page DOM Hook" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="font-semibold text-white text-sm">Seamless In-Page Injection</div>
              <div className="text-xs text-zinc-400">Injects non-intrusive evaluation buttons directly beside the native apply button.</div>
            </div>
          </div>
        </section>

        {/* Tech Stack Pills */}
        <section className="p-8 rounded-2xl border border-zinc-800 bg-zinc-900/40 space-y-4">
          <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
            {isTr ? 'Kullanılan Teknolojiler' : 'Technology Stack & Ecosystem'}
          </div>
          <div className="flex flex-wrap gap-2 pt-2">
            {[
              "TypeScript", "React 18", "Python 3", "FastAPI", "Uvicorn", 
              "WXT Framework", "AWS DynamoDB", "AWS Lambda", "AWS API Gateway", 
              "Google OAuth 2.0", "WebExtension API", "Tailwind CSS", "Node.js"
            ].map((tech) => (
              <span 
                key={tech} 
                className="px-3 py-1.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}
