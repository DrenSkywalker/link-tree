import {
  IconDiscord,
  IconGithub,
  IconInstagram,
  IconTikTok,
  IconTreedom,
  IconTwitch,
} from '../assets/icons';

const themes = {
  light: 'winter',
  dark: 'dark',
};

const badgesList = ['badges.nerd.title', 'badges.autistic.title', 'badges.vegan.title'];

const linksList = [
  {
    icon: IconTreedom,
    title: 'links.treedom.title',
    tooltip: 'links.treedom.tooltip',
    url: 'https://www.treedom.net/it/user/drenskywalker/event/peachess-forest',
    color: 'bg-error text-error-content hover:bg-error',
  },
  {
    icon: IconInstagram,
    title: 'links.instagram.title',
    tooltip: 'links.instagram.tooltip',
    url: 'https://www.instagram.com/drenskywalker/',
    color: 'bg-accent text-accent-content hover:bg-accent',
  },

  {
    icon: IconTikTok,
    title: 'links.tiktok.title',
    tooltip: 'links.tiktok.tooltip',
    url: 'https://www.tiktok.com/@drenskywalker',
    color: 'bg-secondary text-secondary-content hover:bg-secondary',
  },
  {
    icon: IconTwitch,
    title: 'links.twitch.title',
    tooltip: 'links.twitch.tooltip',
    url: 'https://www.twitch.tv/drenskywalker',
    color: 'bg-primary text-primary-content hover:bg-primary',
  },
  {
    icon: IconDiscord,
    title: 'links.discord.title',
    tooltip: 'links.discord.tooltip',
    url: 'https://discord.gg/uBjTWE26aP',
    color: 'bg-info text-info-content hover:bg-info',
  },
  {
    icon: IconGithub,
    title: 'links.github.title',
    tooltip: 'links.github.tooltip',
    url: 'https://github.com/DrenSkywalker',
    color: 'bg-success text-success-content hover:bg-success',
  },
];

export {themes, badgesList, linksList};
