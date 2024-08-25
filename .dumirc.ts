import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  favicons: ['/logo.jpeg'],
  themeConfig: {
    name: 'XForm',
    logo: '/logo.jpeg',
    socialLinks: {
      github: 'https://github.com/totalizer-team/XForm',
    },
  },
});
