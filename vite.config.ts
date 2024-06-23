import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	server: {
		https: {
			cert: 'C:/Apache24/conf/server.crt',
			key: 'C:/Apache24/conf/server.key',
		},
	},
});
