import type { Linter } from 'eslint';
import globals from 'globals';

import { global } from './configs/global.js';
import { imports } from './configs/imports.js';
import { r3f } from './configs/libraries/r3f.js';
import { typescript } from './configs/libraries/typescript.js';
import { react } from './configs/react.js';
import { styles } from './configs/styles.js';

/** @type {import('eslint').Linter.Config[]} */

const configs: Linter.Config[] = [
    react(),
    global(),
    imports(),
    r3f(),
    styles(),
    ...typescript()
]

export default configs;
