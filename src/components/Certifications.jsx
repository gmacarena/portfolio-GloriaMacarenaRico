import { FaCertificate, FaVolumeUp } from 'react-icons/fa';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const certifications = [
  {
    title: 'Lógica de programación: sumérgete en la programación con JavaScript',
    platform: 'Allura',
  },
  {
    title: 'Git y GitHub: repositorio, commit y versiones',
    platform: 'Allura',
  },
  {
    title: 'HTML y CSS: ambientes de desarrollo, estructura de archivos y tags',
    platform: 'Allura',
  },
  {
    title: 'Hábitos: Ser productivo para cumplir sus metas personales',
    platform: 'Allura',
  },
  {
    title: 'Aprender a aprender: técnicas para tu autodesarrollo',
    platform: 'Allura',
  },
  {
    title: 'Python para Data Science: trabajar con funciones, estructuras de datos y excepciones',
    platform: 'Allura',
  },
  {
    title: 'Modelado de bases de datos: entidades, relaciones y atributos',
    platform: 'Allura',
  },
];

// Componente Certifications. Muestra las certificaciones obtenidas en tarjetas.
const Certifications = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const { t, i18n } = useTranslation();

  const handleSpeakCerts = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = `Certificaciones. ${certifications.map(c => c.title).join(', ')}`;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language === 'en' ? 'en-US' : 'es-AR';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="certifications" className="py-24 px-6 bg-background text-white flex flex-col items-center" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-primary mb-10 flex items-center gap-2 tracking-tight leading-tight">
        📜 Certificaciones
        <button
          onClick={handleSpeakCerts}
          aria-label={isSpeaking ? 'Certificaciones (detener)' : 'Certificaciones'}
          className="p-1 rounded-full bg-graydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          <FaVolumeUp className={isSpeaking ? 'animate-pulse text-yellow-300 text-lg' : 'text-lg'} />
        </button>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
        {certifications.map((cert, idx) => (
          <div key={idx} className="bg-graydark rounded-2xl shadow-xl flex flex-col items-center p-6 border border-gray hover:scale-105 transition-transform">
            <FaCertificate className="text-primary text-5xl mb-4" />
            <h3 className="text-base font-bold text-center mb-2 text-primary tracking-wide">{cert.title}</h3>
            <span className="text-sm text-gray">{cert.platform}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certifications; 