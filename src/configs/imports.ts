import { Linter } from 'eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';


export const imports = (): Linter.Config => {
    return {
        name: 'ryqn/imports/rules',
        files: ['**/*.{js,mjs,cjs,ts,tsx,jsx}'],
        plugins: {
            'simple-import-sort': simpleImportSort,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
        },
    }
}