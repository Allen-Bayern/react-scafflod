import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

export default tseslint.config(
    { ignores: ['**/dist', '**/node_modules', '**/coverage'] },
    {
        files: ['apps/**/src/**/*.{js,jsx,ts,tsx}', 'packages/**/src/**/*.{js,jsx,ts,tsx}'],
        extends: [
            js.configs.recommended,
            ...tseslint.configs.recommended,
            react.configs.flat['jsx-runtime'],
            reactHooks.configs.flat.recommended,
            prettierConfig,
        ],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        plugins: {
            react,
            'react-hooks': reactHooks,
            prettier,
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        rules: {
            // 格式化类规则（indent/semi/quotes/linebreak 等）统一交给 Prettier，
            // 由下面的 prettier/prettier 规则在 ESLint 中强制执行，此处不再重复配置，避免互相打架。
            'prettier/prettier': 'error',
            '@typescript-eslint/no-var-requires': 'off',
            'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
            'react/jsx-no-literals': 'off',
            'react-hooks/exhaustive-deps': 'off',
            'react/jsx-no-bind': [1, { allowArrowFunctions: true, allowFunctions: true, allowBind: true }],
            'react/function-component-definition': [
                2,
                { namedComponents: 'arrow-function', unnamedComponents: 'arrow-function' },
            ],
            'react/prop-types': 'off',
        },
    }
);
