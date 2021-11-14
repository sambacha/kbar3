import babel from '@rollup/plugin-babel';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import path from 'path';
import resolve from '@rollup/plugin-node-resolve';

const createBabelConfig = require('./babel.config');
const extensions = ['.js', '.ts', '.tsx', '.json'];
const { root } = path.parse(process.cwd());

function external(id) {
  return !id.startsWith('.') && !id.startsWith(root);
}

function getBabelOptions(targets) {
  const config = createBabelConfig({ env: env => env === 'build' }, targets);
  const plugins = config.plugins;
  return {
    ...config,
    plugins,
    extensions,
    comments: false,
    babelHelpers: 'bundled',
  };
}

function getEsbuild(target) {
  return esbuild({
    minify: true,
    target,
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    loaders: {
      '.ts': 'ts',
    },
    external,
    platform: 'neutral',
    tsconfig: path.resolve('./tsconfig.build.json'),
  });
}

function createDeclarationConfig(input) {
  return {
    input,
    output: {
      dir: 'dist',
    },
    external,
    plugins: [dts()],
  };
}

function createESMConfig(input, file) {
  return {
    input,
    output: {
      format: 'esm',
      file,
    },
    external,
    plugins: [resolve({ extensions }), getEsbuild('esnext')],
  };
}

function createCommonJSConfig(input) {
  return {
    input,
    output: {
      format: 'cjs',
      globals: { react: 'React', 'react-native': 'ReactNative' },
      dir: 'dist',
    },
    external,
    plugins: [
      resolve({ extensions }),
      babel(
        getBabelOptions(
          { browsers: 'last 2 versions' },
          input.replace('src/', '').replace('.ts', '')
        )
      ),
    ],
  };
}

export default function (args) {
  let c = Object.keys(args).find(key => key.startsWith('config-'));
  if (c) {
    c = c.slice('config-'.length);
    return [
      createDeclarationConfig(`src/${c}.ts`, 'dist/types'),
      createCommonJSConfig(`src/${c}.ts`, `dist/${c}.js`),
      createESMConfig(`src/${c}.ts`, `dist/esm/${c}.js`),
    ];
  }
  return [
    createDeclarationConfig('src/index.tsx', 'dist'),
    createCommonJSConfig('src/index.tsx', `dist/index.js`),
    createESMConfig('src/index.tsx', `dist/esm/index.js`),
  ];
}