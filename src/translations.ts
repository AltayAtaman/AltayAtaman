export type Language = 'en' | 'tr';

export interface ProjectSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  externalUrl?: string;
  caseStudyUrl?: string;
  caseStudySlug?: string;
}

export const translations = {
  en: {
    nav: {
      contact: "Contact",
      status: "Available for new projects",
      projects: "yiy.io",
      slides: {
        intro: "Overview",
        projects: "Projects",
        contact: "Contact",
      }
    },
    hero: {
      badge: "Software Engineer — IoT, Embedded & Full-Stack Systems",
      headlinePrefix: "Engineering field-ready systems from ",
      silicon: "silicon",
      headlineMiddle: " to ",
      cloud: "cloud",
      headlineSuffix: ".",
      bio: "Software Engineer with 3 years of professional experience building IoT architectures, multi-node CAN bus protocols, cellular fail-safe OTA pipelines, and production-grade full-stack applications. Mechatronics Engineering graduate from Yildiz Technical University.",
      skills: ["C / C++", "ESP-IDF & STM32", "FreeRTOS", "CAN Bus & MQTT", "AWS / Azure IoT", "Node.js & React", "Embedded Linux"],
      cta: "Get in Touch",
      cvBtn: "Download CV",
      cvFile: "/ismail_altay_ataman_cv.pdf",
      emailBtn: "Email",
      emailCopied: "Copied!",
    },
    projects: {
      featuredTag: "Production Systems",
      yiyTitle: "Offline-First Venue POS & Automation Platform",
      yiyDesc: "Zero-cloud-dependency POS engine with Node.js/SQLite, React admin panel, and Flutter waiter interface syncing over local Wi-Fi.",
      viewCaseStudy: "Visit yiy-io",
      projectCountPrefix: "Project",
      nextSlide: "Next Slide",
      prevSlide: "Previous Slide",
    },
    projectSlides: [
      {
        id: "yiy-io",
        tag: "Production System",
        title: "yiy.io",
        subtitle: "Offline-First POS & Venue Automation Platform",
        description: "An offline-first point-of-sale and venue management system designed for cafes, restaurants, and beach venues where network reliability is critical. Built with Node.js and SQLite, the platform runs on-premises inside a standalone Windows executable (.exe), eliminating database installation overhead and cloud latency. Waitstaff connect directly to the local server over Wi-Fi via QR-code pairing from any mobile browser, routing orders to kitchen and cashier displays without relying on active internet access.",
        tech: ["Node.js", "SQLite", "React 18", "Flutter", "WebSocket LAN", "ESC/POS", "Electron"],
        metrics: [
          { label: "Sync Latency", value: "<5ms (LAN)" },
          { label: "Cloud Dependency", value: "0% Required" },
          { label: "Deployment", value: "Standalone .exe" },
        ],
        externalUrl: "https://AltayAtaman.github.io/yiy-io/",
      },
      {
        id: "grademyjob",
        tag: "Browser Extension & Serverless Platform",
        title: "GradeMyJob",
        subtitle: "Edge Triage & Multi-Tier AI Job Match Platform",
        description: "A cross-browser extension (Chrome MV3 and Firefox MV2) built to automate job posting triage across LinkedIn, Indeed, and We Work Remotely. Developed with React 18, TypeScript, and WXT, it parses unstructured job listings in the browser, separates hard requirements from preferred qualifications, and calculates an objective candidate alignment score. The architecture uses a multi-tier LLM cascade via Google Gemini and OpenAI backed by an AWS Lambda service with DynamoDB caching.",
        tech: ["TypeScript", "React 18", "Python 3", "FastAPI", "AWS DynamoDB", "AWS Lambda", "WXT Framework", "Tailwind CSS"],
        metrics: [
          { label: "Edge Response", value: "~50–70ms" },
          { label: "Fallback Models", value: "Multi-Tier LLM" },
          { label: "Caching", value: "TTL DynamoDB" },
        ],
        externalUrl: "https://AltayAtaman.github.io/GradeMyJob/",
      }
    ] as ProjectSlide[],
    contact: {
      heading: "Let's build reliable systems together.",
      desc: "Whether you want to discuss embedded firmware, IoT edge architectures, telemetry systems, or collaborating on a new project, feel free to reach out.",
      copyEmail: "Copy Email Address",
      emailCopiedNotice: "Email Copied to Clipboard!",
      rights: "All rights reserved.",
      deployed: "Hosted on GitHub Pages",
    }
  },
  tr: {
    nav: {
      contact: "İletişim",
      status: "Yeni Projelere Açık",
      projects: "yiy.io",
      slides: {
        intro: "Giriş",
        projects: "Projeler",
        contact: "İletişim",
      }
    },
    hero: {
      badge: "Yazılım Mühendisi — IoT, Gömülü Sistemler ve Full-Stack",
      headlinePrefix: "Sahaya hazır sistemleri ",
      silicon: "donanımdan",
      headlineMiddle: " ",
      cloud: "buluta",
      headlineSuffix: " inşa ediyorum.",
      bio: "IoT mimarileri, çok düğümlü CAN bus protokolleri, hücresel OTA güncellemeleri ve sahaya hazır uçtan uca uygulamalar geliştiren, 3 yıl profesyonel deneyime sahip Yazılım Mühendisi. Yıldız Teknik Üniversitesi Mekatronik Mühendisliği mezunu.",
      skills: ["C / C++", "ESP-IDF & STM32", "FreeRTOS", "CAN Bus & MQTT", "AWS / Azure IoT", "Node.js & React", "Gömülü Linux"],
      cta: "İletişime Geç",
      cvBtn: "Özgeçmişi İndir",
      cvFile: "/ismail_altay_ataman_cv_tr.pdf",
      emailBtn: "E-posta",
      emailCopied: "Kopyalandı!",
    },
    projects: {
      featuredTag: "Üretim Sistemleri",
      yiyTitle: "Çevrimdışı Kafe & Adisyon Otomasyon Platformu",
      yiyDesc: "Sıfır bulut bağımlılığıyla çalışan Node.js/SQLite çekirdeği, React yönetim paneli ve yerel Wi-Fi üzerinden bağlanan Flutter mobil garson arayüzü.",
      viewCaseStudy: "yiy-io'ya Git",
      projectCountPrefix: "Proje",
      nextSlide: "Sonraki Slayt",
      prevSlide: "Önceki Slayt",
    },
    projectSlides: [
      {
        id: "yiy-io",
        tag: "Üretim Sistemi",
        title: "yiy.io",
        subtitle: "Çevrimdışı Kafe & Adisyon Otomasyon Platformu",
        description: "Kafe, restoran ve plaj işletmeleri için geliştirilmiş, tamamen çevrimdışı (offline-first) çalışan masa ve adisyon otomasyon platformudur. Node.js ve yerel SQLite mimarisi üzerine kurulu sistem, tek bir taşınabilir Windows çalıştırılabilir dosyası (.exe) ile harici veritabanı veya sunucu kurulumu gerektirmeden çalışır. Garsonlar uygulama indirmeden yerel Wi-Fi ağı üzerinden QR kod okutarak bağlanır; siparişleri mutfak ve kasa ekranlarına anlık ve sıfır bulut gecikmesiyle aktarır.",
        tech: ["Node.js", "SQLite", "React 18", "Flutter", "WebSocket LAN", "ESC/POS", "Electron"],
        metrics: [
          { label: "Senkronizasyon", value: "<5ms (Yerel Ağ)" },
          { label: "Bulut Bağımlılığı", value: "%0 Zorunlu" },
          { label: "Dağıtım", value: "Taşınabilir .exe" },
        ],
        externalUrl: "https://AltayAtaman.github.io/yiy-io/",
      },
      {
        id: "grademyjob",
        tag: "Tarayıcı Eklentisi & Sunucusuz Platform",
        title: "GradeMyJob",
        subtitle: "Yapay Zekâ ile Gerçek Zamanlı İş İlanı Analitiği",
        description: "LinkedIn, Indeed ve We Work Remotely üzerindeki iş ilanlarını tarayıcı üzerinde gerçek zamanlı analiz eden bir eklentidir (Chrome MV3 ve Firefox MV2). React 18, TypeScript ve WXT altyapısıyla geliştirilen sistem; ilan metinlerini yapılandırılmış verilere dönüştürür, zorunlu teknik gereksinimleri tercih edilenlerden ayrıştırır ve adayın profiline göre objektif bir uyum skoru hesaplar. Google Gemini ve OpenAI modellerini AWS Lambda ve DynamoDB önbelleklemesiyle destekler.",
        tech: ["TypeScript", "React 18", "Python 3", "FastAPI", "AWS DynamoDB", "AWS Lambda", "WXT Framework", "Tailwind CSS"],
        metrics: [
          { label: "Edge Yanıtı", value: "~50–70ms" },
          { label: "Model Mimarisi", value: "Çok Kademeli LLM" },
          { label: "Önbellekleme", value: "TTL DynamoDB" },
        ],
        externalUrl: "https://AltayAtaman.github.io/GradeMyJob/",
      }
    ] as ProjectSlide[],
    contact: {
      heading: "Birlikte güvenilir sistemler inşa edelim.",
      desc: "Gömülü yazılımlar, IoT uç mimarileri, telemetri sistemleri veya yeni bir projede birlikte çalışmak hakkında görüşmek isterseniz dilediğiniz zaman ulaşabilirsiniz.",
      copyEmail: "E-postayı Kopyala",
      emailCopiedNotice: "E-posta Panoya Kopyalandı!",
      rights: "Tüm hakları saklıdır.",
      deployed: "GitHub Pages üzerinde barındırılmaktadır",
    }
  }
};
