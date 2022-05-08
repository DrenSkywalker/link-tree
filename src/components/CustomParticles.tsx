import * as React from 'react';
import Particles from 'react-tsparticles';
import {loadFull} from 'tsparticles';

import {useApp} from '../context/app.context';

import {IconLeaf1, IconLeaf2} from '../assets/icons';

import {themes} from '../imports/constants';

const CustomParticles = () => {
  const {
    state: {currentTheme},
  } = useApp();

  const isThemeLight = currentTheme === themes.light;

  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fpsLimit: 120,
        particles: {
          color: {
            value: ['#ffffff', '#EFD8BD', '#75D7B3'],
          },
          move: {
            direction: isThemeLight ? 'top-left' : 'none',
            enable: true,
            random: true,
            speed: isThemeLight ? {min: 0.5, max: 1} : {min: 0.2, max: 0.5},
            outMode: 'out',
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 40,
          },
          opacity: {
            value: 1,
            random: !isThemeLight && true,
            anim: {
              enable: !isThemeLight && true,
              speed: 1,
              opacity_min: 0,
            },
          },
          shape: {
            type: isThemeLight ? 'image' : 'circle',
            images: [
              {
                src: IconLeaf1,
                width: 512,
                height: 512,
              },
              {
                src: IconLeaf2,
                width: 512,
                height: 512,
              },
            ],
          },
          size: {
            value: isThemeLight ? {min: 10, max: 20} : {min: 1, max: 4},
            anim: {
              enable: !isThemeLight && true,
              speed: 4,
              size_min: 0.3,
            },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default CustomParticles;
