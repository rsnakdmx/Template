import { defineConfig } from 'vite';
import * as path from 'path';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	build: {
		rollupOptions: {
			treeshake: 'recommended',
		},
	},
	plugins: [react()],
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	server: {
		https: {
			cert: 'C:/Apache24/conf/server.crt',
			key: 'C:/Apache24/conf/server.key',
		},
	},
});
