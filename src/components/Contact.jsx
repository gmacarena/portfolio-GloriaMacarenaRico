import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeUp } from 'react-icons/fa';
import { useState } from 'react';

// Componente Contact. Muestra el formulario de contacto y los botones a redes sociales y CV.
const Contact = () => {
  const { t, i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);
  const formRef = useRef(null);

  const handleSpeakContact = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = `${t('nav.contact.title')}. ${t('nav.contact.name')}, ${t('nav.contact.email')}, ${t('nav.contact.message')}`;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language === 'en' ? 'en-US' : 'es-AR';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    // Construir el mailto
    const mailto = `mailto:gloriamacarenarico@gmail.com?subject=Contacto%20desde%20portafolio&body=Nombre:%20${encodeURIComponent(name)}%0AEmail:%20${encodeURIComponent(email)}%0AMensaje:%20${encodeURIComponent(message)}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="min-h-[30vh] bg-background text-white flex flex-col items-center justify-center px-6 py-24" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-primary mb-6 flex items-center gap-2 tracking-tight leading-tight">
        {t('nav.contact.title')}
        <button
          onClick={handleSpeakContact}
          aria-label={isSpeaking ? t('nav.contact.title') + ' (detener)' : t('nav.contact.title')}
          className="p-1 rounded-full bg-graydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          <FaVolumeUp className={isSpeaking ? 'animate-pulse text-yellow-300 text-lg' : 'text-lg'} />
        </button>
      </h2>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-gray-900 rounded-lg shadow-lg p-8 flex flex-col gap-4"
        aria-label="Formulario de contacto"
      >
        <label htmlFor="name" className="text-yellow-300 font-semibold">
          {t('nav.contact.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <label htmlFor="email" className="text-yellow-300 font-semibold">
          {t('nav.contact.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <label htmlFor="message" className="text-yellow-300 font-semibold">
          {t('nav.contact.message')}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="p-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <button
          type="submit"
          className="mt-4 px-4 py-2 bg-yellow-300 text-black font-bold rounded hover:bg-yellow-400 transition"
        >
          {t('nav.contact.send')}
        </button>
      </form>
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        <a href="https://www.linkedin.com/in/gloria-macarena-rico-1922a2219/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-black rounded-lg font-semibold hover:bg-graylight transition-all duration-200 text-base shadow-sm">LinkedIn</a>
        <a href="https://github.com/gmacarena" target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-graydark text-white rounded-lg font-semibold hover:bg-primary transition-all duration-200 text-base shadow-sm">GitHub</a>
        <a href="/cv-gloria-rico.pdf" download className="px-6 py-2 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-black transition-all duration-200 text-base shadow-sm">Descargar CV</a>
      </div>
      <p className="mt-6 text-center text-lg text-gray">
        {t('nav.contact.whatsapp')}: <a href="https://wa.me/543625309019" target="_blank" rel="noopener noreferrer" className="underline text-yellow-300">+54 9 3625 30-9019</a>
      </p>
    </section>
  );
};

export default Contact; 