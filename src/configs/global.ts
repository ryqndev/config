import { Linter } from "eslint"

export const global = (): Linter.Config => {
    return {
        name: 'ryqn/global',
        files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
        rules: {
            'no-restricted-globals': [
                'error',
                {
                    name: 'close',
                    message: 'Use window.close if the global is wanted',
                },
            ],
        }
    }

}