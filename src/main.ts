import globals from 'globals';

import { global } from './configs/global';
import { imports } from './configs/imports';
import { r3f } from './configs/libraries/r3f';
import { typescript } from './configs/libraries/typescript';
import { react } from './configs/react';
import { styles } from './configs/styles';

/** @type {import('eslint').Linter.Config[]} */
export default [
    react(),
    global(),
    ...typescript(),
    imports(),
    r3f(),
    styles()
];
