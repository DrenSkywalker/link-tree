import * as React from 'react';
import {useTranslation} from 'react-i18next';

import Icon from './Icon';

import {IconHeart} from '../assets/icons';

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="flex-center relative w-full space-x-2 py-4">
      <p className="text-gradient">{t('footer.made-with')}</p>
      <Icon icon={IconHeart} />
      <p className="text-gradient-inverse">{t('footer.by')}</p>
    </footer>
  );
};

export default Footer;
