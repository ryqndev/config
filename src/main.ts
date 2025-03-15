import pluginJs from '@eslint/js';
import { configs as ReactThreeConfigs } from '@react-three/eslint-plugin';
import globals from 'globals';
import stylelintConfig from 'eslint-config-stylelint';

import { react } from './configs/react';
import { global } from './configs/global';
import { imports } from './configs/imports';

import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'] },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
                document: 'readonly',
                navigator: 'readonly',
                window: 'readonly',
            }
        }
    },
    ...react(),
    ...global(),
    ...imports(),
    // pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    // ...stylelintConfig,
    // ReactThreeConfigs,
    {
        settings: {
            'import/resolver': {
                typescript: {},
            },
        },
        rules: {
            'no-absolute-path': 'off',
            'arrow-parents': ['off', 'always'],



            'no-else-return': 'error',

            'guard-for-in': 'off',

            // use the TS version
            // 'no-unused-vars': 'off',
            // '@typescript-eslint/no-unused-vars': ['error'],



        },
    },

];
