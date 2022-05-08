import * as React from 'react';
import i18next from 'i18next';
import {useTranslation} from 'react-i18next';

import {useApp} from '../context/app.context';

import Divider from './Divider';
import Icon from './Icon';

import getRandomizeColor from '../imports/utils';
import {gradientColors, themes} from '../imports/constants';

import {ImageHeroDark, ImageHeroLight} from '../assets/images';
import {IconSun, IconMoon} from '../assets/icons';

const Header = () => {
  const {t} = useTranslation();
  const {
    state: {currentTheme},
    dispatch,
  } = useApp();

  const isThemeLight = currentTheme === themes.light;

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage((i18next.language = language));
    localStorage.setItem('language', language);
  };

  const handleChangeTheme = (theme: string) => {
    dispatch({type: 'SET_CURRENT_THEME', payload: theme});
    localStorage.setItem('theme', theme);
  };

  const getGradientColor = () => getRandomizeColor(gradientColors);

  return (
    <header className="flex-center relative h-[18rem] w-full">
      <figure className="absolute top-0 left-0 h-full w-full">
        <img
          src={isThemeLight ? ImageHeroLight : ImageHeroDark}
          alt="Hero"
          className="h-full w-full object-cover"
        />

        <figcaption className="hidden">
          <cite>
            Credits to <a href="https://feradami.artstation.com">Fernanda Adami</a>
          </cite>
        </figcaption>
      </figure>

      <div className="hero-overlay absolute" />

      <div className="absolute top-0 left-0 flex w-full justify-end py-2 px-4">
        <button
          type="button"
          className="btn btn-ghost btn-circle text-neutral-content"
          onClick={() => handleChangeLanguage(i18next.language === 'it' ? 'en' : 'it')}
        >
          {i18next.language.toUpperCase()}
        </button>

        <button
          type="button"
          className="btn btn-ghost btn-circle ml-2"
          onClick={() => handleChangeTheme(isThemeLight ? themes.dark : themes.light)}
        >
          <Icon icon={isThemeLight ? IconMoon : IconSun} />
        </button>
      </div>

      <div className="hero-content mb-10 text-center text-neutral-content">
        <h1 className="mb-5 bg-gradient-to-r from-info to-error bg-clip-text text-5xl font-semibold tracking-wider text-transparent drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
          {t('title').toUpperCase()}
        </h1>
      </div>

      <Divider />
    </header>
  );
};

export default Header;
