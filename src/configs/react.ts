import { Linter } from "eslint";
import pluginReact from 'eslint-plugin-react';

export const react = (): Linter.Config => {

    return {
        name: 'ryqn/react',
        files: ['**/*.{jsx,tsx}'],
        ...pluginReact.configs.flat.recommended,
        rules: {
            'react/jsx-sort-props': ['error', { callbacksLast: true }],
            'react/display-name': 'off',
            'react/jsx-wrap-multilines': [
                'error',
                {
                    declaration: 'parens-new-line',
                    assignment: 'parens-new-line',
                    return: 'parens-new-line',
                    arrow: 'parens-new-line',
                    condition: 'parens-new-line',
                    logical: 'parens-new-line',
                    prop: 'parens-new-line',
                },
            ],
            'react/react-in-jsx-scope': 'off',
            'react/no-unknown-property': ['off', { ignore: ['args'] }],
        }
    }
}