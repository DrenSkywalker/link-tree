import * as React from 'react';
import {useTranslation} from 'react-i18next';

import {useApp} from '../context/app.context';
import {badgesList, linksList, themes} from '../imports/constants';

import useMediaQuery from '../hooks';

import {ImageAvatar, ImageAvatarDark} from '../assets/images';

import Icon from './Icon';

const Main = () => {
  const {t} = useTranslation();

  const {
    state: {currentTheme},
  } = useApp();

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <main className="grow-1 mt-20 mb-7 flex flex-auto items-center justify-center size-full sm:m-0">
      <div className="custom-card flex-col-center card-body relative w-80 max-w-[20rem] space-y-4 sm:w-96 sm:max-w-[24rem]">
        <div className="flex-center absolute top-0 h-28 w-28 -translate-y-1/2">
          <div className="mask mask-squircle size-full">
            <figure className="size-full">
              <img
                src={currentTheme === themes.light ? ImageAvatar : ImageAvatarDark}
                alt="avatar"
                className="object-cover size-full"
              />
            </figure>
          </div>
        </div>

        <h1 className="text-gradient !mt-12 text-5xl tracking-wider">{t('title').toUpperCase()}</h1>

        <div className="flex-center w-full space-x-2 ">
          {badgesList.map(badge => (
            <span key={badge} className="badge badge-ghost cursor-default">
              {t(badge)}
            </span>
          ))}
        </div>

        <div className="divider">Links</div>

        <div className="w-full space-y-2">
          {linksList.map(link => (
            <div
              key={link.title}
              className={`${
                isDesktop ? 'custom-tooltip-right tooltip-right' : 'custom-tooltip-top tooltip-top'
              } tooltip w-full`}
              data-tip={t(link.tooltip)}
            >
              <button
                type="button"
                className={`btn btn-block border-0 hover:scale-105 ${link.color} relative !text-white/90 focus-visible:outline-neutral-content`}
                onClick={() => openLink(link.url)}
              >
                <span className="absolute left-4">
                  <Icon icon={link.icon} white size="md" />
                </span>
                {t(link.title)}
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Main;
