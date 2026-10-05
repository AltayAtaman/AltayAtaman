export type Language = 'en' | 'tr';

export interface ProjectSlide {
  id: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  caseStudyUrl?: string;
  externalUrl?: string;
}

export const translations = {
  en: {
    nav: {
      contact: "Contact",
      status: "Available for Hire",
      projects: "yiy.io",
      slides: {
        intro: "Intro",
        projects: "Projects",
        contact: "Contact",
      }
    },
    hero: {
      badge: "IoT, Embedded & Full-Stack Systems Engineer",
      headlinePrefix: "Building field-ready systems from ",
      silicon: "bare metal",
      headlineMiddle: " to the ",
      cloud: "cloud",
      headlineSuffix: ".",
      bio: "Software Engineer with 3 years of professional experience across IoT architectures, multi-node CAN bus protocols, fail-safe cellular OTA pipelines, and production-grade full-stack applications. Mechatronics Engineering graduate from Yıldız Technical University.",
      skills: ["C / C++", "ESP-IDF & STM32", "FreeRTOS", "CAN Bus & MQTT", "AWS / Azure IoT", "Node.js & React", "Embedded Linux"],
      cta: "Get in Touch",
      cvBtn: "Download CV",
      emailBtn: "Email",
      emailCopied: "Copied!",
    },
    projects: {
      featuredTag: "Featured Live Project",
      yiyTitle: "Offline-First POS & Cafe Automation Platform",
      yiyDesc: "Zero-cloud-latency restaurant management with Node.js/SQLite local core, React admin dashboard, and Flutter waiter app syncing over local Wi-Fi.",
      viewCaseStudy: "Visit yiy-io",
      projectCountPrefix: "Project",
      nextSlide: "Next Slide",
      prevSlide: "Previous Slide",
    },
    projectSlides: [
      {
        id: "yiy-io",
        tag: "Featured Production System",
        title: "yiy.io",
        subtitle: "Offline-First POS & Cafe Automation Platform",
        description: "A zero-cloud-dependency restaurant management engine running on an isolated local Node.js + SQLite core. Features real-time LAN socket synchronization with Flutter waiter handhelds, thermal ESC/POS printing, and complete fault tolerance against ISP outages.",
        tech: ["Node.js", "SQLite", "React 18", "Flutter", "WebSocket LAN", "ESC/POS", "Electron"],
        metrics: [
          { label: "Sync Latency", value: "<5ms (LAN)" },
          { label: "Cloud Dependency", value: "0% Required" },
          { label: "Architecture", value: "Master-Replica Edge" },
        ],
        caseStudyUrl: "/projects/yiy-io",
        externalUrl: "https://yiy-io.pages.dev",
      }
    ] as ProjectSlide[],
    contact: {
      heading: "Let's build reliable systems together.",
      desc: "Whether you want to discuss embedded firmware, IoT edge architectures, telemetry systems, or collaborating on a new project, feel free to reach out.",
      copyEmail: "Copy Email Address",
      emailCopiedNotice: "Email Copied to Clipboard!",
      rights: "All rights reserved.",
      deployed: "Deployed to Cloudflare Pages",
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
      badge: "IoT, Gömülü Sistemler ve Uçtan Uca Yazılım Mühendisi",
      headlinePrefix: "Sahaya hazır sistemleri ",
      silicon: "donanımdan",
      headlineMiddle: " ",
      cloud: "buluta",
      headlineSuffix: " inşa ediyorum.",
      bio: "IoT mimarileri, çok düğümlü CAN bus protokolleri, hücresel OTA güncellemeleri ve sahaya hazır uçtan uca uygulamalar geliştiren, 3 yıl profesyonel deneyime sahip Yazılım Mühendisi. Yıldız Teknik Üniversitesi Mekatronik Mühendisliği mezunu.",
      skills: ["C / C++", "ESP-IDF & STM32", "FreeRTOS", "CAN Bus & MQTT", "AWS / Azure IoT", "Node.js & React", "Gömülü Linux"],
      cta: "İletişime Geç",
      cvBtn: "Özgeçmişi İndir",
      emailBtn: "E-posta",
      emailCopied: "Kopyalandı!",
    },
    projects: {
      featuredTag: "Öne Çıkan Canlı Proje",
      yiyTitle: "Çevrimdışı Kafe & Adisyon Otomasyon Platformu",
      yiyDesc: "Sıfır bulut gecikmesi, Node.js/SQLite yerel mimari, React yönetici paneli ve yerel Wi-Fi üzerinden bağlanan Flutter mobil garson arayüzü.",
      viewCaseStudy: "yiy-io'ya Git",
      projectCountPrefix: "Proje",
      nextSlide: "Sonraki Slayt",
      prevSlide: "Önceki Slayt",
    },
    projectSlides: [
      {
        id: "yiy-io",
        tag: "Öne Çıkan Üretim Sistemi",
        title: "yiy.io",
        subtitle: "Çevrimdışı Kafe & Adisyon Otomasyon Platformu",
        description: "İnternet kesintilerinden etkilenmeyen, yerel Node.js + SQLite çekirdeği üzerinde çalışan restoran ve kafe yönetim motoru. Flutter garson el terminalleriyle yerel Wi-Fi üzerinden anlık soket senkronizasyonu, termal fiş yazıcı protokolleri ve tam veri güvenliği sunar.",
        tech: ["Node.js", "SQLite", "React 18", "Flutter", "WebSocket LAN", "ESC/POS", "Electron"],
        metrics: [
          { label: "Senkronizasyon", value: "<5ms (Yerel Ağ)" },
          { label: "Bulut Bağımlılığı", value: "%0 Zorunlu" },
          { label: "Mimari", value: "Master-Replica Edge" },
        ],
        caseStudyUrl: "/projects/yiy-io",
        externalUrl: "https://yiy-io.pages.dev",
      }
    ] as ProjectSlide[],
    contact: {
      heading: "Birlikte güvenilir sistemler inşa edelim.",
      desc: "Gömülü yazılımlar, IoT uç mimarileri, telemetri sistemleri veya yeni bir projede birlikte çalışmak hakkında görüşmek isterseniz dilediğiniz zaman ulaşabilirsiniz.",
      copyEmail: "E-postayı Kopyala",
      emailCopiedNotice: "E-posta Panoya Kopyalandı!",
      rights: "Tüm hakları saklıdır.",
      deployed: "Cloudflare Pages üzerinde barındırılmaktadır",
    }
  }
};

