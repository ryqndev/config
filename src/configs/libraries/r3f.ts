import { configs } from '@react-three/eslint-plugin';
import type { Linter } from 'eslint';

import reactThreePlugin from '@react-three/eslint-plugin';

export const r3f = (): Linter.Config => {
    return {
        name: "ryqn/r3f",
        files: ['**/*.{js,ts,jsx,tsx}'],
        plugins: {
            '@react-three': reactThreePlugin as any,
        },
        rules: {
            '@react-three/no-clone-in-loop': 'error',
            '@react-three/no-new-in-loop': 'warn',
        },
    };
}
