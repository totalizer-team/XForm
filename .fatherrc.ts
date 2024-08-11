import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  platform: 'browser',
  cjs: { output: 'lib' },
  esm: { output: 'dist', alias: { 'rc-util/lib': 'rc-util/es' } },
});
