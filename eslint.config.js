import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginPromise from 'eslint-plugin-promise';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import typescriptEslint from '@typescript-eslint/eslint-plugin';

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginPromise.configs['flat/recommended'],
	{ ignores: ['coverage/', 'dist/', 'node_modules/', 'public/'] },
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			ecmaVersion: 12,
			parser: tsParser,
			sourceType: 'module',
		},

		plugins: {
			'@typescript-eslint': typescriptEslint,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			'@typescript-eslint/no-empty-object-type': ['error', { allowObjectTypes: 'always' }],
			'@typescript-eslint/consistent-type-imports': 'error',
			'no-duplicate-imports': 'error',
			'no-unneeded-ternary': 'error',
			'prefer-object-spread': 'error',
			'react-refresh/only-export-components': 'warn',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'react/react-in-jsx-scope': 'off',
			...reactHooks.configs.recommended.rules,
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	eslintConfigPrettier,
];
