import * as React from 'react';
import {useTranslation} from 'react-i18next';

import Icon from './Icon';

import {IconHeart} from '../assets/icons';

const Footer = () => {
  const {t} = useTranslation();

  return (
    <footer className="flex-center w-full py-4">
      <p>{t('footer.made-with')}</p> <Icon icon={IconHeart} /> <p>{t('footer.by')}</p>
    </footer>
  );
};

export default Footer;
