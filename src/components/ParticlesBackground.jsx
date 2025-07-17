import { useCallback } from 'react';
import { Particles } from '@tsparticles/react';
import { loadFull } from '@tsparticles/engine';

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        background: { color: 'transparent' },
        particles: {
          number: { value: 40, density: { enable: true, area: 800 } },
          color: { value: ['#a78bfa', '#fde047', '#fff'] },
          shape: { type: 'circle' },
          opacity: { value: 0.3, random: true },
          size: { value: { min: 2, max: 5 }, random: true },
          move: {
            enable: true,
            speed: 1.2,
            direction: 'none',
            random: true,
            straight: false,
            outModes: { default: 'out' },
          },
          links: {
            enable: true,
            distance: 120,
            color: '#a78bfa',
            opacity: 0.2,
            width: 1,
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground; 