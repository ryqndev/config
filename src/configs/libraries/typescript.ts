import tseslint, { type ConfigArray } from 'typescript-eslint';
import type { Linter } from 'eslint';

export const typescript = (): Linter.Config[] => {
    return tseslint.configs.recommended as Linter.Config[];

}