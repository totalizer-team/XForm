import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.png'],
  themeConfig: {
    title: 'XForm',
    name: 'XForm',
    logo: '/logo.png',
    socialLinks: {
      github: 'https://github.com/totalizer-team/XForm',
    },
    footer: 'Open-source MIT Licensed | Copyright © 2024-present',
  },
});
