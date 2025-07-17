import avatar from '../assets/avatar.png';
import { useTranslation } from 'react-i18next'
import { FaVolumeUp } from 'react-icons/fa';
import { useRef, useState } from 'react';

// Componente 'Sobre mí'. Muestra la bio, avatar y frase destacada. Incluye botón para lectura en voz alta.
const About = () => {
  const { t, i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const utteranceRef = useRef(null);

  const handleSpeakAbout = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = `${t('aboutSection.title')}. ${t('aboutSection.bio')}. ${t('aboutSection.quote')}`;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language === 'en' ? 'en-US' : 'es-AR';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    utteranceRef.current = utterance;
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="about" className="min-h-screen bg-background text-white flex flex-col items-center justify-center px-6 py-24" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-primary mb-6 flex items-center gap-2 tracking-tight leading-tight">
        {t('aboutSection.title')}
        <button
          onClick={handleSpeakAbout}
          aria-label={isSpeaking ? t('listenAbout') + ' (detener)' : t('listenAbout')}
          className="ml-2 p-1 rounded-full bg-graydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          <FaVolumeUp className={isSpeaking ? 'animate-pulse text-yellow-300 text-lg' : 'text-lg'} />
        </button>
      </h2>
      <img src={avatar} alt="Avatar de Gloria" className="w-32 h-32 rounded-full mb-8 border-4 border-primary shadow-lg animate-pulse" />
      <p className="text-lg text-graylight text-center max-w-2xl mb-6 font-medium">
        {t('aboutSection.bio')}
      </p>
      <blockquote className="italic text-center text-xl text-yellow-300 max-w-2xl font-semibold border-l-4 border-yellow-300 pl-4 py-2 bg-graydark/40 shadow-sm">“{t('aboutSection.quote')}”</blockquote>
    </section>
  )
}

export default About
