import { useTranslation } from 'react-i18next'
import { FaVolumeUp } from 'react-icons/fa';
import { useState } from 'react';

// Componente Skills. Muestra las habilidades hard y soft, traducidas, con íconos y botón de voz.
const hardSkills = [
  { key: 'python', icon: '🐍' },
  { key: 'javascript', icon: '🟨' },
  { key: 'html', icon: '🌐' },
  { key: 'css', icon: '🎨' },
  { key: 'c', icon: '💻' },
  { key: 'tkinter', icon: '🖼️' },
  { key: 'pyqt', icon: '🪟' },
  { key: 'react', icon: '⚛️' }
];

const softSkills = [
  'criticalThinking',
  'collaboration',
  'problemSolving',
  'adaptability',
  'commitment',
  'teamwork'
];

const Skills = () => {
  const { t, i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeakSkills = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = `${t('nav.skills.title')}. ${hardSkills.map(s => t(`skills.hard.${s.key}`)).join(', ')}. ${softSkills.map(s => t(`skills.soft.${s}`)).join(', ')}`;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language === 'en' ? 'en-US' : 'es-AR';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="skills" className="min-h-screen bg-background text-white py-24 px-6 flex flex-col items-center" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-primary mb-10 flex items-center gap-2 tracking-tight leading-tight">
        {t('nav.skills.title')}
        <button
          onClick={handleSpeakSkills}
          aria-label={isSpeaking ? t('nav.skills.title') + ' (detener)' : t('nav.skills.title')}
          className="p-1 rounded-full bg-graydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          <FaVolumeUp className={isSpeaking ? 'animate-pulse text-yellow-300 text-lg' : 'text-lg'} />
        </button>
      </h2>
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 tracking-wide">Hard Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
            {hardSkills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-2 bg-graydark/60 rounded-xl p-4 shadow hover:scale-110 hover:-translate-y-1 hover:animate-bounce transition-transform duration-300 focus-within:scale-110 focus-within:-translate-y-1 outline-none"
              >
                <span style={{ fontSize: '2rem' }}>{skill.icon}</span>
                <span className="text-base text-gray text-center font-semibold">{t(`skills.hard.${skill.key}`)}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-primary mb-6 tracking-wide">Soft Skills</h3>
          <div className="grid grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <div key={index} className="flex flex-col items-center gap-2 bg-graydark/60 rounded-xl p-4 shadow hover:scale-110 hover:-translate-y-1 hover:animate-bounce transition-transform duration-300 focus-within:scale-110 focus-within:-translate-y-1 outline-none">
                <span className="text-base text-gray text-center font-semibold">{t(`skills.soft.${skill}`)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
  