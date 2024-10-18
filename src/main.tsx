import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { SetTrusted } from './Utilities/TrustedTypes.ts';
import App from './App.tsx';

SetTrusted();

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>,
);
