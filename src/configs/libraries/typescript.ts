
import tseslint from 'typescript-eslint';

export const typescript = () => {
    return tseslint.config(tseslint.configs.recommended);
}