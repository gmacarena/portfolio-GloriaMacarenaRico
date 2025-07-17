// Componente principal de la aplicación. Maneja el layout general, el alto contraste y la integración de todas las secciones.
// Importa los componentes principales y la configuración de estilos.
// Incluye el botón de alto contraste y la navegación entre secciones.
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import avatar from './assets/avatar.png'
import './index.css'
import Navbar from './components/Navbar'
import About from './components/About'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LanguageSwitcher from './components/LanguageSwitcher';
import Footer from './components/Footer';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaVolumeUp } from 'react-icons/fa';
import GeometricBackground from './components/GeometricBackground';
// import ParticlesBackground from './components/ParticlesBackground';

function App() {
  const { t } = useTranslation();
  const [highContrast, setHighContrast] = useState(false);
  const [isSpeakingHome, setIsSpeakingHome] = useState(false);

  const toggleContrast = () => {
    setHighContrast((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({ duration: 900, once: true });
  }, []);

  const handleSpeakHome = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeakingHome(false);
      return;
    }
    const text = `${t('home.name')}. ${t('home.role')}. ${t('home.highlight')}`;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language === 'en' ? 'en-US' : 'es-AR';
    utterance.onend = () => setIsSpeakingHome(false);
    utterance.onerror = () => setIsSpeakingHome(false);
    setIsSpeakingHome(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <div className={`app${highContrast ? ' high-contrast' : ''} min-h-screen bg-gradient-to-b from-primary via-background to-black relative`} role="main">
      <GeometricBackground />
      <Navbar />
      {/* Botón de alto contraste flotante */}
      <button
        onClick={toggleContrast}
        aria-pressed={highContrast}
        aria-label={highContrast ? t('contrast.deactivate') : t('contrast.activate')}
        className="fixed bottom-6 right-6 z-50 px-4 py-2 rounded-full bg-black/70 text-yellow-300 border border-yellow-300 shadow-lg opacity-60 hover:opacity-100 focus:opacity-100 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all"
      >
        {highContrast ? t('contrast.normal') : t('contrast.high')}
      </button>
      <div id="home" className="min-h-screen bg-background text-white flex flex-col items-center justify-center p-4" data-aos="fade-up">
        <img src={avatar} alt="Avatar de Gloria" className="w-40 h-40 rounded-full mb-6" />
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-5xl font-extrabold text-primary text-center tracking-tight leading-tight">{t('home.name')}</h1>
          <button
            onClick={handleSpeakHome}
            aria-label={isSpeakingHome ? t('listenHome') + ' (detener)' : t('listenHome')}
            className="p-1 rounded-full bg-graydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
          >
            <FaVolumeUp className={isSpeakingHome ? 'animate-pulse text-yellow-300 text-lg' : 'text-lg'} />
          </button>
        </div>
        <h2 className="text-2xl font-semibold text-gray mb-2 text-center tracking-wide">{t('home.role')}</h2>
        <p className="italic text-lg text-graylight text-center mb-8 max-w-2xl">{t('home.highlight')}</p>
        {/* Elimino el div de botones de navegación de la sección de inicio */}
      </div>
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
