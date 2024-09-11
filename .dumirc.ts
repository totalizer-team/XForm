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
    rtl: false,
    localesEnhance: [
      {
        id: 'zh-CN',
        switchPrefix: '中',
      },
      {
        id: 'en-US',
        switchPrefix: 'En',
      },
    ],
  },
  mfsu: false,
  locales: [
    { id: 'en-US', name: 'English', suffix: '' },
    { id: 'zh-CN', name: '中文', suffix: '-cn' },
  ],
});
