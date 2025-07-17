import React, { useEffect, useState } from "react";
import { useTranslation } from 'react-i18next'
import { FaCode, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

const sections = [
  { id: "home", label: "nav.home" },
  { id: "about", label: "nav.aboutLabel" },
  { id: "skills", label: "nav.skillsLabel" },
  { id: "projects", label: "nav.projects" },
  { id: "certifications", label: "nav.certifications" },
  { id: "contact", label: "nav.contactLabel" },
];

// Componente Navbar. Barra de navegación superior con enlaces a secciones, botones sociales y cambio de idioma.
const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [lang, setLang] = useState(i18n.language || 'es');
  const [activeSection, setActiveSection] = useState('home');

  const changeLanguage = () => {
    const newLang = lang === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
    setLang(newLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            current = section.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full bg-background text-white shadow-md z-50 p-4 flex justify-between items-center" role="navigation" aria-label="Menú principal">
      <h1 className="flex items-center gap-2 text-2xl font-extrabold text-primary tracking-tight">
        <a href="#home" className="flex items-center gap-2 hover:scale-110 transition-transform focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-full">
          <FaCode className="text-yellow-300 text-3xl drop-shadow-lg" />
          <span className="hidden sm:inline-block bg-gradient-to-r from-yellow-300 via-primary to-yellow-300 bg-clip-text text-transparent select-none">Gloria</span>
        </a>
      </h1>
      <ul className="flex gap-6 text-sm font-medium">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              className={`hover:text-primary transition-colors duration-200 ${activeSection === section.id ? 'text-yellow-300 underline font-bold' : ''}`}
              aria-current={activeSection === section.id ? 'page' : undefined}
            >
              {t(section.label) || section.label}
            </a>
          </li>
        ))}
        <li>
          <a
            href="/cv-gloria-rico.pdf"
            download
            className="ml-2 p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-200 text-lg flex items-center"
            aria-label={t('home.cvBtn')}
          >
            <FaFileDownload />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/gloria-macarena-rico-1922a2219/"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-200 text-lg flex items-center"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/gmacarena"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 p-2 rounded-full border border-primary text-primary hover:bg-primary hover:text-black transition-all duration-200 text-lg flex items-center"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <button
            onClick={changeLanguage}
            className="ml-4 border border-primary px-2 rounded text-primary hover:bg-primary hover:text-black transition-all duration-300"
          >
            {lang.toUpperCase()}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
