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

const gradientColors = [
  'from-primary to-secondary',
  'from-secondary to-primary',
  'from-primary to-accent',
  'from-accent to-primary',
  'from-primary to-warning',
  'from-warning to-primary',
  'from-primary to-error',
  'from-error to-primary',
  'from-primary to-success',
  'from-success to-primary',
  'from-primary to-info',
  'from-info to-primary',
  'from-secondary to-accent',
  'from-accent to-secondary',
  'from-secondary to-warning',
  'from-warning to-secondary',
  'from-secondary to-error',
  'from-error to-secondary',
  'from-secondary to-success',
  'from-success to-secondary',
  'from-secondary to-info',
  'from-info to-secondary',
  'from-accent to-warning',
  'from-warning to-accent',
  'from-accent to-error',
  'from-error to-accent',
  'from-accent to-success',
  'from-success to-accent',
  'from-accent to-info',
  'from-info to-accent',
  'from-warning to-error',
  'from-error to-warning',
  'from-warning to-success',
  'from-success to-warning',
  'from-warning to-info',
  'from-info to-warning',
  'from-error to-success',
  'from-success to-error',
  'from-error to-info',
  'from-info to-error',
  'from-success to-info',
  'from-info to-success',
];

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

export {themes, gradientColors, badgesList, linksList};
