const plugin = require('tailwindcss/plugin');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {},
    extend: {},
  },
  plugins: [
    require('daisyui'),
    plugin(({matchUtilities, theme}) => {
      matchUtilities(
        {
          size: value => ({
            width: value,
            height: value,
          }),
        },
        {values: theme('spacing')}
      );
    }),
  ],
  daisyui: {
    themes: [
      {
        winter: {
          ...require('daisyui/src/colors/themes')['[data-theme=winter]'],
          success: '#75D7B3',
          'success-content': '#005234',
          error: '#FF7AC6',
          'error-content': '#4D002B',
        },
      },
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#047AFF',
          secondary: '#463AA2',
          accent: '#C148AC',
          info: '#93E7FB',
          success: '#75D7B3',
          'success-content': '#005234',
          error: '#FF7AC6',
          'error-content': '#4D002B',
        },
      },
    ],
  },
};
