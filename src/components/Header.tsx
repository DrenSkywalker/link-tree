import * as React from 'react';
import i18next from 'i18next';

import {useApp} from '../context/app.context';

import {themes} from '../imports/constants';

import Icon from './Icon';

import {IconSun, IconMoon} from '../assets/icons';

const Header = () => {
  const {
    state: {currentTheme, currentLanguage},
    dispatch,
  } = useApp();

  const isThemeLight = currentTheme === themes.light;

  const handleChangeLanguage = (language: string) => {
    i18next.changeLanguage((i18next.language = language));
    dispatch({type: 'SET_CURRENT_LANGUAGE', payload: language});
    localStorage.setItem('language', language);
  };

  const handleChangeTheme = (theme: string) => {
    dispatch({type: 'SET_CURRENT_THEME', payload: theme});
    localStorage.setItem('theme', theme);
  };

  return (
    <header className="relative flex w-full items-center justify-end py-2 px-4">
      <button
        type="button"
        className="btn btn-ghost btn-circle text-neutral-content"
        onClick={() => handleChangeLanguage(i18next.language === 'it' ? 'en' : 'it')}
      >
        {currentLanguage}
      </button>

      <button
        type="button"
        className="btn btn-ghost btn-circle ml-2"
        onClick={() => handleChangeTheme(isThemeLight ? themes.dark : themes.light)}
      >
        <Icon icon={isThemeLight ? IconMoon : IconSun} />
      </button>
    </header>
  );
};

export default Header;
