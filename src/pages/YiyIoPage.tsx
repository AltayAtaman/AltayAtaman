import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Language } from '../translations';
import { 
  Download, 
  Store, 
  Wifi, 
  CheckCircle2, 
  Sparkles, 
  Smartphone, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Laptop, 
  Lock, 
  Clock, 
  Check, 
  X, 
  AlertTriangle,
  ExternalLink,
  Quote
} from 'lucide-react';

interface YiyIoPageProps {
  lang: Language;
  toggleLang: () => void;
  latency: number;
}

export default function YiyIoPage({ lang, toggleLang, latency }: YiyIoPageProps) {
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('i.altay.ataman@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleOpenDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    setDownloadModalOpen(true);
  };

  const directDownloadUrl = "https://github.com/AltayAtaman/yiy-io/archive/refs/heads/main.zip";

  const isTr = lang === 'tr';

  return (
    <div className="min-h-screen bg-[#0d0f12] text-zinc-200 font-sans selection:bg-amber-500/25 selection:text-amber-200 flex flex-col justify-between">
      
      {/* Shared Persistent Portfolio Header */}
      <Navbar lang={lang} toggleLang={toggleLang} latency={latency} />

      {/* Main Content Area */}
      <main className="max-w-5xl mx-auto px-6 py-12 sm:py-16 space-y-24 w-full flex-1">
        
        {/* Project Context Sub-bar */}
        <div className="border-b border-zinc-800/80 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
            <span className="font-mono text-xs uppercase tracking-widest text-amber-500 font-semibold">
              {isTr ? 'Özel Proje Sayfası' : 'Special Project Showcase'}
            </span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs font-mono text-zinc-400">yiy.io</span>
          </div>

          <div className="flex items-center gap-2">
            <a 
              href="https://yiy-io.pages.dev" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-xs font-mono text-amber-400 transition-colors"
            >
              <span>yiy-io.pages.dev</span>
              <ExternalLink className="w-3 h-3 text-amber-400" />
            </a>
            <a 
              href="https://github.com/AltayAtaman/yiy-io" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs font-mono text-zinc-300 transition-colors"
            >
              <span>GitHub Repo</span>
              <ExternalLink className="w-3 h-3 text-zinc-500" />
            </a>
            <a 
              href="https://bionluk.com/i_altay/isletmenize-ozel-yonetim-paneli-gelistiririm-872901" 
              target="_blank" 
              rel="noreferrer" 
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 hover:bg-amber-500/20 text-xs font-mono text-amber-400 transition-colors"
            >
              <Store className="w-3 h-3" />
              <span>Bionluk</span>
            </a>
          </div>
        </div>

        {/* Hero Section */}
        <section className="space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-800/60 border border-zinc-700/50 text-amber-400 text-xs font-mono">
                <Zap className="w-3.5 h-3.5" />
                <span>{isTr ? '%100 Çevrimdışı & Sıfır Bulut Bağımlılığı' : '100% Offline & Zero Cloud Dependency'}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {isTr ? 'Akıllı Kafe & İşletme ' : 'Smart Cafe & Hospitality '}
                <span className="text-amber-400">
                  {isTr ? 'Otomasyon Sistemi' : 'Automation Platform'}
                </span>
              </h1>

              {/* Motto Box */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs sm:text-sm font-medium">
                <Quote className="w-3.5 h-3.5 text-amber-400 rotate-180" />
                <span className="font-mono text-amber-300">
                  {isTr ? 'Masadan mutfağa en kısa yol' : 'The shortest path from table to kitchen'}
                </span>
                <Quote className="w-3.5 h-3.5 text-amber-400" />
              </div>

              <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl font-light">
                {isTr 
                  ? 'yiy.io, kafeler ve restoranlar için geliştirilmiş ultra hızlı, çevrimdışı (offline-first) çalışan masa ve sipariş takip platformudur. İnternet kesilse dahi sistem durmaz, siparişler yerel Wi-Fi ağı üzerinden güvenle işlenir.'
                  : 'yiy.io is an ultra-fast, offline-first table & order management platform for cafes and restaurants. Even if the venue loses internet access, local operations continue uninterrupted over Wi-Fi with zero latency.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a 
                  href="https://yiy-io.pages.dev" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-semibold text-xs sm:text-sm transition-all shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{isTr ? 'Canlı Siteyi Aç' : 'Open Live Website'}</span>
                </a>

                <button 
                  onClick={handleOpenDownload}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium text-xs sm:text-sm border border-zinc-700/80 transition-colors"
                >
                  <Download className="w-4 h-4 text-amber-400" />
                  <span>{isTr ? 'Hemen Ücretsiz İndir (ZIP)' : 'Download Free (ZIP)'}</span>
                </button>

                <a 
                  href="https://bionluk.com/i_altay/isletmenize-ozel-yonetim-paneli-gelistiririm-872901" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-medium text-xs sm:text-sm border border-zinc-800 transition-colors"
                >
                  <Store className="w-4 h-4 text-amber-400" />
                  <span>{isTr ? 'Lisans & Destek' : 'License & Support'}</span>
                </a>
              </div>

              {/* Metrics Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-800/80 font-mono">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-amber-400">0 ms</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{isTr ? 'Bulut Gecikmesi' : 'Cloud Latency'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-emerald-400">%100</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{isTr ? 'Offline Çalışma' : 'Offline Guarantee'}</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-white">{isTr ? 'Tek-Tık' : 'One-Click'}</div>
                  <div className="text-[11px] text-zinc-500 mt-0.5">{isTr ? 'Kurulum (.exe)' : 'Standalone .exe'}</div>
                </div>
              </div>
            </div>

            {/* Right Visual Window Mockup */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-950 text-xs text-zinc-500 font-mono">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                    <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  </div>
                  <span className="ml-2 text-zinc-400">yiy.io Admin — localhost:3001</span>
                </div>

                <div className="relative">
                  <img 
                    src="/projects/yiy-io/admin_panel_screen.png" 
                    alt="yiy.io Yönetici Ekran Görünümü" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="mt-4 sm:absolute sm:-bottom-4 sm:-left-6 bg-zinc-900 border border-zinc-800 rounded-xl p-3 shadow-xl flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                  <Wifi className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">
                    {isTr ? 'Kesintisiz Yerel Ağ' : 'Zero Cloud Outage'}
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    {isTr ? 'İnternetsiz Wi-Fi ile Garson Bağlantısı' : 'Direct Wi-Fi Waiter Sync'}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Testimonial Banner */}
          <div className="border border-zinc-800 rounded-xl bg-zinc-900/30 p-6 space-y-3">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-medium">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{isTr ? 'Canlı Sahada Doğrulanmış' : 'Verified in Active Field Operations'}</span>
                </div>
                <blockquote className="text-zinc-300 text-sm sm:text-base italic leading-relaxed">
                  "{isTr 
                    ? 'Plaj ve masa siparişlerimizi garsonlarımız saniyeler içinde mutfağa aktarıyor. Yoğun sezonda internet kopsa bile kesintisiz çalıştık.'
                    : 'Our waitstaff transmits beach and table orders to the kitchen in seconds. Even when our internet drops out during peak season, operations continue without interruption.'}"
                </blockquote>
                <div className="text-xs text-zinc-400 font-mono">
                  <strong className="text-white font-medium">Mücahit Işık</strong> — Lura Beach (Zeytinli, Altınkum Plajı / Balıkesir)
                </div>
              </div>

              <div className="shrink-0">
                <img 
                  src="/projects/yiy-io/lura_beach.jpg" 
                  alt="Lura Beach Logo" 
                  className="w-14 h-14 rounded-lg object-cover border border-zinc-800"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="ozellikler" className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isTr ? 'Sistem Mimarisi & Özellikler' : 'Architecture & Core Capabilities'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? 'İşletmenizi Hızlandıracak Çözümler' : 'Engineered for High-Velocity Hospitality'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: Laptop,
                title: isTr ? "Masa & Bölge Yönetimi" : "Table & Zone Management",
                desc: isTr 
                  ? "Salon, Teras, Bahçe gibi farklı alanlardaki masalarınızın anlık doluluk durumunu ve hesap bakiyesini tek ekrandan görün."
                  : "Monitor table occupancy, active bills, and zones (Salon, Terrace, Beach Cabanas) in real-time on one dashboard."
              },
              {
                icon: Smartphone,
                title: isTr ? "Mobil Garson Arayüzü" : "Mobile Waiter Interface",
                desc: isTr 
                  ? "Garsonlar herhangi bir akıllı telefon veya tabletten QR kod taratarak saniyeler içinde giriş yapabilir ve masada sipariş alabilir."
                  : "Waitstaff log in instantly by scanning a QR code from any smartphone browser without installing native app store downloads."
              },
              {
                icon: Wifi,
                title: isTr ? "%100 Çevrimdışı Güvencesi" : "100% Offline-First Core",
                desc: isTr 
                  ? "Verileriniz kendi bilgisayarınızdaki yerel veritabanında saklanır. İnternetiniz kopsa bile sipariş süreci kesintiye uğramaz."
                  : "All operational records reside on your local machine SQLite instance. Complete immunity to ISP outages."
              },
              {
                icon: BarChart3,
                title: isTr ? "Detaylı Analiz & Raporlama" : "Detailed Sales Analytics",
                desc: isTr 
                  ? "Günlük toplam ciro, en çok satan ürünler, Nakit vs Kredi Kartı ödeme oranları ve masa bazlı sipariş geçmişi elinizin altında."
                  : "Daily revenue, best-selling menu items, cash vs credit ratios, and comprehensive historical table logs."
              },
              {
                icon: Zap,
                title: isTr ? "Sıfır Kurulum Karmaşası" : "Single-Executable Deploy",
                desc: isTr 
                  ? "Karmaşık veritabanı sunucusu veya web hosting gerektirmez. Tek bir yiy-server.exe dosyası ile saniyeler içinde çalışır."
                  : "No external database servers or web hosting setup required. Packed into a self-contained .exe that runs in seconds."
              },
              {
                icon: Lock,
                title: isTr ? "Tam Veri Gizliliği" : "Complete Data Sovereignty",
                desc: isTr 
                  ? "Müşteri ve ciro bilgileriniz hiçbir 3. taraf bulut sunucuya gönderilmez. Tüm veriniz %100 sizin denetiminizdedir."
                  : "Business revenue figures and customer transactions never leak to 3rd party cloud providers. Total privacy."
              }
            ].map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 hover:border-zinc-700 transition-colors space-y-2.5">
                  <div className="w-8 h-8 rounded-lg bg-zinc-800 text-amber-400 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-white">{f.title}</h3>
                  <p className="text-zinc-400 text-xs leading-relaxed font-light">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Mobile Waiter Showcase */}
        <section id="mobil" className="space-y-8 pt-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
                <Smartphone className="w-3.5 h-3.5" />
                <span>{isTr ? 'Mobil Garson Modu' : 'Mobile Waiter Mode'}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {isTr ? 'Garsonlarınız Saniyeler İçinde Bağlansın' : 'Empower Waiters on Any Mobile Device'}
              </h2>

              <p className="text-zinc-400 text-sm leading-relaxed font-light">
                {isTr 
                  ? 'Mobil garson arayüzü sayesinde pahalı ek sipariş terminallerine yatırım yapmanıza gerek kalmaz. Garsonlar kendi akıllı telefonlarından veya işletmeye ait tabletlerden sisteme bağlanabilir.'
                  : 'Eliminate expensive proprietary hardware terminals. Waitstaff seamlessly access the responsive mobile interface on their own smartphones or low-cost restaurant tablets.'}
              </p>

              <div className="space-y-2.5 pt-1 font-mono text-xs text-zinc-300">
                {[
                  isTr ? "QR Kod İle Anında Hızlı Giriş" : "Instant QR Code Pairing over Local Wi-Fi",
                  isTr ? "Kategori Bazlı Ürün Arama & Hızlı Ekleme" : "Category-based Menu Browsing & Fast Order Addition",
                  isTr ? "Anlık Mutfak & Kasa Senkronizasyonu" : "Real-Time Kitchen Display & POS Synchronization"
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-xl max-w-[240px]">
                <img 
                  src="/projects/yiy-io/mobile_app_screen.png" 
                  alt="Mobil Garson Uygulaması Görünümü" 
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>
            </div>

          </div>
        </section>

        {/* Real Field Experience Section */}
        <section id="saha" className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{isTr ? 'Saha Deneyimi' : 'Field Experience'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? 'Gerçek İşletme Ortamında Yüksek Performans' : 'Battle-Tested in Busy Venues'}
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-2">
              <div className="rounded-xl overflow-hidden border border-zinc-800 shadow-xl relative">
                <img 
                  src="/projects/yiy-io/waiter_using_app.png" 
                  alt="Sahada Garson Kullanımı" 
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-zinc-950/90 border border-emerald-500/30 text-emerald-400 text-xs font-mono flex items-center gap-1.5">
                  <CheckCircle2 className="w-3 h-3" />
                  <span>{isTr ? 'Canlı Sahada Kullanım' : 'Live In Action'}</span>
                </div>
              </div>
              <div className="text-[11px] text-zinc-500 font-mono">
                📍 Lura Beach (Zeytinli, Balıkesir)
              </div>
            </div>

            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-xl font-bold text-white">
                {isTr ? 'Masada Kesintisiz & Hızlı Sipariş Alma' : 'Instant Order Taking at the Table'}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed font-light">
                {isTr 
                  ? 'Garson masadayken siparişi dokunarak seçer, onayladığı an mutfaktaki ve kasadaki ekrana yansır. Garsonun kasaya gitmesine veya kağıt sipariş fişi yazmasına gerek kalmaz.'
                  : 'Waitstaff tap table items directly with patrons. The second confirmed, order tickets appear on the kitchen and cashier displays. Zero unnecessary foot-traffic.'}
              </p>

              <div className="space-y-3 font-mono text-xs">
                {[
                  { 
                    title: isTr ? "Anında Mutfak İletimi" : "Sub-second Kitchen Routing", 
                    desc: isTr ? "Siparişler anında mutfak veya bar ekranına düşer." : "Dishes route to bar/kitchen immediately." 
                  },
                  { 
                    title: isTr ? "Herhangi Bir Akıllı Telefon" : "Zero Hardware Lock-In", 
                    desc: isTr ? "iOS ve Android tüm telefonlarda tarayıcıdan çalışır." : "Runs in Chrome, Safari, iOS and Android." 
                  },
                  { 
                    title: isTr ? "Hafif & Kolay Kullanım" : "Intuitive UI", 
                    desc: isTr ? "Garsonların dakikalar içinde alıştığı sade arayüz." : "Minimal training required for new staff." 
                  },
                ].map((item) => (
                  <div key={item.title} className="p-3.5 rounded-lg border border-zinc-800/80 bg-zinc-900/40 space-y-0.5">
                    <div className="font-semibold text-white">{item.title}</div>
                    <div className="text-[11px] text-zinc-400">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 3-Step Setup Guide */}
        <section id="kurulum" className="space-y-8 pt-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-amber-500 font-semibold uppercase tracking-wider">
              <Clock className="w-3.5 h-3.5" />
              <span>{isTr ? 'Hızlı Başlangıç' : 'Quick Deployment'}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              {isTr ? '3 Adımda Sisteminizi Çalıştırın' : 'Deploy in 3 Simple Steps'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                num: "01",
                title: isTr ? "İndirin & Çıkarın" : "Download & Extract",
                desc: isTr ? "ZIP arşivini indirin ve bilgisayarınızda bir klasöre çıkarın." : "Download the ZIP package and extract to any folder."
              },
              {
                num: "02",
                title: isTr ? "yiy-server.exe Çalıştırın" : "Launch yiy-server.exe",
                desc: isTr ? "Çalıştırılabilir dosyaya çift tıklayarak sistemi başlatın." : "Double-click the standalone executable to initialize."
              },
              {
                num: "03",
                title: isTr ? "Garsonları Bağlayın" : "Connect Waitstaff",
                desc: isTr ? "Garson telefonundan Wi-Fi QR kodunu taratıp sipariş almaya başlayın!" : "Scan the QR code from any smartphone on Wi-Fi."
              }
            ].map((step) => (
              <div key={step.num} className="p-5 rounded-xl border border-zinc-800 bg-zinc-900/30 space-y-2">
                <div className="text-2xl font-mono font-bold text-amber-400">{step.num}</div>
                <h3 className="text-base font-bold text-white">{step.title}</h3>
                <p className="text-zinc-400 text-xs leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* Shared Persistent Portfolio Footer & Contact */}
      <Footer lang={lang} />

      {/* Download Warning License Modal */}
      {downloadModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-md p-6 rounded-xl bg-[#15181e] border border-zinc-700 shadow-2xl space-y-6">
            <button 
              onClick={() => setDownloadModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <AlertTriangle className="w-5 h-5" />
            </div>

            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white">
                {isTr ? 'Lisans Uyarısı' : 'License Notice'}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {isTr 
                  ? 'İndireceğiniz yiy.io otomasyon yazılımı geçerli bir lisans anahtarı olmadan çalışmayacaktır.'
                  : 'The yiy.io automation package requires a valid license activation key to operate.'}
              </p>
            </div>

            <div className="p-3.5 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-between gap-3">
              <div className="text-xs text-zinc-400">
                <span className="block text-zinc-500 text-[11px] font-mono">
                  {isTr ? 'Lisans İletişim:' : 'License Contact:'}
                </span>
                <span className="font-mono text-amber-400 font-medium">i.altay.ataman@gmail.com</span>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="px-2.5 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs font-mono text-zinc-300 transition-colors"
              >
                {copied ? (isTr ? "Kopyalandı" : "Copied") : (isTr ? "Kopyala" : "Copy")}
              </button>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2 font-mono text-xs">
              <button 
                onClick={() => setDownloadModalOpen(false)}
                className="px-3.5 py-2 text-zinc-400 hover:text-white transition-colors"
              >
                {isTr ? 'Vazgeç' : 'Cancel'}
              </button>
              <a 
                href={directDownloadUrl}
                onClick={() => setDownloadModalOpen(false)}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold transition-all shadow-md shadow-amber-500/20"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isTr ? 'Yine de İndir' : 'Download Anyway'}</span>
              </a>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
