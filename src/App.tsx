import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Language } from './translations';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio_lang') as Language;
    return saved === 'tr' ? 'tr' : 'en';
  });
  const [latency, setLatency] = useState(16);

  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(Math.floor(14 + Math.random() * 6));
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    const nextLang: Language = lang === 'en' ? 'tr' : 'en';
    setLang(nextLang);
    localStorage.setItem('portfolio_lang', nextLang);
  };

  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route 
          path="/" 
          element={<HomePage lang={lang} toggleLang={toggleLang} latency={latency} />} 
        />
        <Route 
          path="*" 
          element={<HomePage lang={lang} toggleLang={toggleLang} latency={latency} />} 
        />
      </Routes>
    </BrowserRouter>
  );
}
