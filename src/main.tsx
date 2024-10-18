import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SetTrusted } from './Utilities/TrustedTypes.ts';
import App from './App.tsx';

const root = document.getElementById('root') as HTMLElement;

if (!root) throw new Error('No se encontró elemento raíz');

SetTrusted();

if (!root.hasChildNodes())
	createRoot(root).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
