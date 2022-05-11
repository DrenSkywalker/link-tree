import * as React from 'react';

import {useApp} from '../context/app.context';

import CustomParticles from './CustomParticles';

import {themes} from '../imports/constants';
import {ImageHeroDark, ImageHeroLight} from '../assets/images';

const Background = () => {
  const {
    state: {currentTheme},
  } = useApp();

  const isLightTheme = currentTheme === themes.light;

  return (
    <>
      <figure className="absolute top-0 left-0 h-full w-full">
        <img
          src={isLightTheme ? ImageHeroLight : ImageHeroDark}
          alt="Hero"
          className="h-full w-full object-cover"
        />

        <figcaption className="hidden">
          <cite>
            Credits to <a href="https://feradami.artstation.com">Fernanda Adami</a>
          </cite>
        </figcaption>
      </figure>

      <CustomParticles />

      <div className="hero-overlay absolute" />
    </>
  );
};
export default Background;
