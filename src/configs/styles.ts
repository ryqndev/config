import { Linter } from 'eslint';
import stylelintConfig from 'eslint-config-stylelint';


export const styles = (): Linter.Config => {
    return {
        name: "ryqn/styles",
        plugins: { "styles": stylelintConfig }
    };
}