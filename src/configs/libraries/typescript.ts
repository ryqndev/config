
import type { Linter } from 'eslint';
import tseslint from 'typescript-eslint';

export const typescript = (): Linter.Config[] => {
    return tseslint.config(tseslint.configs.recommended) as Linter.Config[];
}