import React from "react";
import { useTranslation } from "react-i18next";
import { FaVolumeUp } from 'react-icons/fa';
import { useState } from 'react';

const projects = [
  {
    title: "Sistema de Punto de Venta",
    description: "Desarrollado para Hollywood Barber's Club, este sistema optimiza la gestión comercial de productos de barbería y peluquería. Permite realizar ventas y controlar stock de forma ágil y segura.",
    tech: "Python, Tkinter, PyQt6 (en progreso)",
    learn: "Aprendí a integrar interfaces gráficas con lógica de negocio, y a resolver problemas reales de gestión comercial usando Python y PyQt.",
    image: "https://cdn-icons-png.flaticon.com/512/3076/3076922.png", // caja registradora
    link: "https://github.com/gmacarena"
  },
  {
    title: "Amigo Secreto (Allura)",
    description: "Aplicación para sortear amigos secretos, desarrollada como parte de un challenge en la plataforma Allura.",
    tech: "Python, CSS",
    learn: "Mejoré mis habilidades en lógica, manejo de archivos y experiencia de usuario.",
    image: "https://cdn-icons-png.flaticon.com/512/1047/1047711.png", // regalo
    link: "https://github.com/gmacarena/amigosecreto"
  },
  {
    title: "Gestor de Tareas con Tkinter",
    description: "Aplicación de escritorio para gestionar tareas, desarrollada en Python usando Tkinter. Permite agregar, editar y eliminar tareas con una interfaz intuitiva.",
    image: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png", // checklist
    link: "#"
  },
  {
    title: "Portafolio Web",
    description: "Mi portafolio personal hecho con React, mostrando mis proyectos, habilidades y contacto.",
    image: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png", // laptop
    link: "#"
  },
  {
    title: "Calculadora PyQt",
    description: "Calculadora de escritorio desarrollada en Python con PyQt, con soporte para operaciones básicas y diseño moderno.",
    image: "https://cdn-icons-png.flaticon.com/512/992/992651.png", // calculadora
    link: "#"
  },
  {
    title: "Punto de Venta en Python + PyQt",
    description: "Sistema de punto de venta con interfaz gráfica, desarrollado en Python y PyQt. Permite gestionar productos, ventas y reportes de manera sencilla.",
    image: "https://cdn-icons-png.flaticon.com/512/3076/3076922.png", // caja registradora
    link: "#"
  }
];

// Componente Projects. Renderiza las tarjetas de proyectos con imágenes temáticas, descripción, tecnologías y enlace a GitHub.
const Projects = () => {
  const { t, i18n } = useTranslation();
  const [isSpeaking, setIsSpeaking] = useState(false);

  const handleSpeakProjects = () => {
    if (window.speechSynthesis.speaking) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
      return;
    }
    const text = `${t('nav.projects')}. ${projects.map(p => p.title).join(', ')}`;
    const utterance = new window.SpeechSynthesisUtterance(text);
    utterance.lang = i18n.language === 'en' ? 'en-US' : 'es-AR';
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <section id="projects" className="py-24 px-6 bg-background text-white flex flex-col items-center" data-aos="fade-up">
      <h2 className="text-4xl font-extrabold text-primary mb-10 flex items-center gap-2 tracking-tight leading-tight">
        {t('nav.projects')}
        <button
          onClick={handleSpeakProjects}
          aria-label={isSpeaking ? t('nav.projects') + ' (detener)' : t('nav.projects')}
          className="p-1 rounded-full bg-graydark text-white hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary transition"
        >
          <FaVolumeUp className={isSpeaking ? 'animate-pulse text-yellow-300 text-lg' : 'text-lg'} />
        </button>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-graydark rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 overflow-hidden flex flex-col border border-gray scale-100 hover:scale-105 transition-transform group">
            <div className="relative w-full h-48 overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110 group-hover:brightness-90 shadow-lg" 
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent py-2 px-4 flex items-end">
                <span className="text-lg font-bold text-primary drop-shadow-lg">{project.title}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              {/* <h3 className="text-xl font-bold text-primary mb-2 tracking-wide">{project.title}</h3> */}
              <p className="text-gray mb-2 text-base">{project.description}</p>
              {project.tech && <p className="text-sm text-graylight mb-1">Tecnologías: <span className="font-semibold">{project.tech}</span></p>}
              {project.learn && <p className="text-sm text-graylight mb-2">Aprendizaje: <span className="italic">{project.learn}</span></p>}
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="mt-auto inline-block px-4 py-2 bg-primary text-black rounded-lg font-semibold hover:bg-graylight transition-all duration-200 text-base shadow-sm">Ver en GitHub</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects; 