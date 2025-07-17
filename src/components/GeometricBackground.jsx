const GeometricBackground = () => (
  <div className="fixed inset-0 z-10 pointer-events-none select-none w-screen h-screen">
    <svg width="100%" height="100%" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Círculos */}
      <circle cx="200" cy="150" r="40" fill="#a78bfa" fillOpacity="0.18" style={{ animation: 'pulse-slow 4s ease-in-out infinite' }} />
      <circle cx="400" cy="900" r="30" fill="#fde047" fillOpacity="0.13" style={{ animation: 'pulse-slow 4s ease-in-out infinite' }} />
      <circle cx="1700" cy="200" r="35" fill="#fff" fillOpacity="0.10" style={{ animation: 'pulse-slow 4s ease-in-out infinite' }} />
      <circle cx="1200" cy="300" r="25" fill="#a78bfa" fillOpacity="0.13" style={{ animation: 'pulse-slow 4s ease-in-out infinite' }} />
      <circle cx="900" cy="800" r="28" fill="#fde047" fillOpacity="0.10" style={{ animation: 'pulse-slow 4s ease-in-out infinite' }} />
      <circle cx="1600" cy="900" r="22" fill="#fff" fillOpacity="0.10" style={{ animation: 'pulse-slow 4s ease-in-out infinite' }} />
      {/* Triángulos */}
      <polygon points="300,300 350,370 250,370" fill="#a78bfa" fillOpacity="0.13" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <polygon points="1800,800 1850,870 1750,870" fill="#fde047" fillOpacity="0.10" style={{ animation: 'float 8s ease-in-out infinite' }} />
      {/* Cuadrados */}
      <rect x="600" y="200" width="40" height="40" rx="8" fill="#fde047" fillOpacity="0.10" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <rect x="1400" y="700" width="32" height="32" rx="8" fill="#a78bfa" fillOpacity="0.13" style={{ animation: 'float 8s ease-in-out infinite' }} />
      {/* Líneas */}
      <rect x="900" y="100" width="4" height="80" fill="#fff" fillOpacity="0.10" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <rect x="300" y="600" width="3" height="60" fill="#fde047" fillOpacity="0.10" style={{ animation: 'float 8s ease-in-out infinite' }} />
      <rect x="1700" y="500" width="3" height="60" fill="#a78bfa" fillOpacity="0.10" style={{ animation: 'float 8s ease-in-out infinite' }} />
    </svg>
    <style>{`
      @keyframes pulse-slow {
        0%, 100% { opacity: 0.18; }
        50% { opacity: 0.28; }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(30px); }
      }
    `}</style>
  </div>
);

export default GeometricBackground; 