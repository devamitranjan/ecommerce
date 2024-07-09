import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import testingLibrary from 'eslint-plugin-testing-library';
import { FlatCompat } from '@eslint/eslintrc';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default [
  {
    ignores: ['coverage/', 'public/', 'node_modules/']
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    ...tseslint.configs.disableTypeChecked
  },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
        project: ['./tsconfig.json', './tsconfig.node.json']
      }
    }
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  {
    plugins: {
      'testing-library': testingLibrary
    }
  },
  eslintConfigPrettier,
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.extends('airbnb'),
  ...compat.extends('airbnb/hooks'),
  ...compat.extends('airbnb-typescript'),
  eslintPluginPrettierRecommended,
  {
    rules: {
      'import/no-named-as-default': 'off',
      'import/no-amd': 'off', // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-amd.md#when-not-to-use-it
      'import/no-mutable-exports': 'off', // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-mutable-exports.md#importno-mutable-exports
      'import/newline-after-import': 'off', // https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/newline-after-import.md
      '@typescript-eslint/comma-dangle': 'off',
      'react/react-in-jsx-scope': 'off'
    }
  }
];
