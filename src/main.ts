import pluginJs from '@eslint/js';
import { configs as ReactThreeConfigs } from '@react-three/eslint-plugin';
import globals from 'globals';
import stylelintConfig from 'eslint-config-stylelint';


import tseslint from 'typescript-eslint';

/** @type {import('eslint').Linter.Config[]} */

// eslint-disable-next-line
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
            'no-restricted-globals': [
                'error',
                {
                    name: 'close',
                    message: 'Use window.close if the global is wanted',
                },
            ],
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
