import * as React from 'react';
import {useTranslation} from 'react-i18next';

import {badgesList, linksList} from '../imports/constants';

import Icon from './Icon';

import {ImageAvatar} from '../assets/images';

const Card = () => {
  const {t} = useTranslation();

  const openLink = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="custom-card flex-col-center card-body relative w-72 space-y-4 sm:w-96">
      <div className="flex-center absolute top-0 h-28 w-28 -translate-y-1/2">
        <div className="mask mask-squircle h-full w-full">
          <figure className="h-full w-full">
            <img src={ImageAvatar} alt="avatar" className="h-full w-full object-cover" />
          </figure>
        </div>
      </div>

      <div className="flex-center !mt-12 w-full space-x-2 ">
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
            className="custom-tooltip-right tooltip tooltip-right w-full"
            data-tip={t(link.tooltip)}
          >
            <button
              type="button"
              className={`btn btn-block border-0 hover:scale-105 ${link.color}`}
              onClick={() => openLink(link.url)}
            >
              <span className="absolute left-4">
                <Icon icon={link.icon} white />
              </span>
              {t(link.title)}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
