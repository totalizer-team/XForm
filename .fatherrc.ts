import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  // platform: 'browser',
  // cjs: { output: 'lib' },
  // esm: { output: 'dist', alias: { 'rc-util/lib': 'rc-util/es' } },

  // ESM 打包配置
  esm: {
    input: 'src', // 默认编译目录
    output: 'es',
    platform: 'browser', // 默认构建为 Browser 环境的产物
    transformer: 'babel', // 默认使用 babel 以提供更好的兼容性
  },
  // CommonJS 打包配置
  cjs: {
    input: 'src', // 默认编译目录
    output: 'lib',
    platform: 'browser', // 默认构建为 Node.js 环境的产物
    transformer: 'babel', // 默认使用 esbuild 以获得更快的构建速度
  },
});
