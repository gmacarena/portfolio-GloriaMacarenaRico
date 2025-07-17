import React from "react";
import { useTranslation } from "react-i18next";

// Componente Footer. Muestra la frase final del portafolio.
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      className="bg-gray-900 text-purple-300 py-6 mt-10 text-center"
      role="contentinfo"
    >
      <p tabIndex="0" aria-label="Footer text">
        {t("footer.phrase")}
      </p>
      <p tabIndex="0" aria-label="Copyright">
        © 2025 Gloria Macarena Rico / Portfolio
      </p>
    </footer>
  );
};

export default Footer;

