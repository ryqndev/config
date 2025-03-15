import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import importPlugin from 'eslint-plugin-import';
import simpleImportSort from 'eslint-plugin-simple-import-sort';


export const imports = () => {
    const tsImportResolver = createTypeScriptImportResolver({});

    return [
        importPlugin.flatConfigs.recommended,
        tsImportResolver,
        {
            name: 'ryqn/imports/rules',
            plugins: {
                'simple-import-sort': simpleImportSort,
            },
            rules: {
                'import/no-default-export': 'error',
                'simple-import-sort/imports': 'error',
                'simple-import-sort/exports': 'error',
                'sort-imports': ['off', 'always'],

                'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
                'import/first': 'error',
                'import/no-duplicates': 'error',
                'import/no-mutable-exports': 'error',
                'import/no-named-default': 'error',
                'import/no-self-import': 'error',
            },
        },
    ]
}