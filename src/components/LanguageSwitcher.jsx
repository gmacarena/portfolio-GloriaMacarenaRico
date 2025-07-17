// Componente LanguageSwitcher. Permite cambiar el idioma de la aplicación.
import React from "react";
import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex gap-4 p-4 justify-center">
      <button
        onClick={() => changeLanguage("es")}
        className="text-white hover:text-purple-300 focus:outline-none"
        aria-label="Cambiar a español"
      >
        Español
      </button>
      <button
        onClick={() => changeLanguage("en")}
        className="text-white hover:text-purple-300 focus:outline-none"
        aria-label="Switch to English"
      >
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher; 