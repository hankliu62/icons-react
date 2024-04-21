import { defineConfig } from 'father';
import path from 'path';

const config = defineConfig({
  // Eslint@9.x 改变不支持 --ext，不使用 @rc-component/father-plugin
  // Error: Command failed: npx eslint src/ --ext .tsx,.ts --rule '@typescript-eslint/consistent-type-exports: error'
  plugins: [path.resolve(__dirname, 'plugins', 'father')],
  cjs: {
    transformer: 'swc',
    targets: {
      ie: 11,
    },
  },
});

if (process.env.NODE_ENV !== 'ci') {
  config.umd = {
    entry: {
      'index.umd': {
        chainWebpack(memo) {
          memo.entryPoints.clear();
          memo.entry('index.umd').add('./src/index.ts');
          memo.optimization.minimize(false);

          return memo;
        },
      },
      'index.umd.min': {
        chainWebpack(memo) {
          memo.entryPoints.clear();
          memo.entry('index.umd.min').add('./src/index.ts');

          return memo;
        },
      },
    },
    output: 'dist',
    name: 'icons',
    externals: { react: 'React' },
    sourcemap: false,
  };
}

export default config;
