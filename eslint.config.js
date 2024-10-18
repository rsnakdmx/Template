import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import tsparser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginPromise from 'eslint-plugin-promise';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	pluginPromise.configs['flat/recommended'],
	{ files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
	{ ignores: ['dist/', 'node_modules/', 'public/'] },
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
			ecmaVersion: 12,
			parser: tsparser,
			parserOptions: {
				sourceType: 'module',
			},
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': 'warn',
			'react/jsx-uses-react': 'off',
			'react/react-in-jsx-scope': 'off',
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	eslintConfigPrettier,
];
