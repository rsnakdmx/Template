import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { TrustedTypes } from './Utilities/TrustedTypes.ts';
import App from './App.tsx';

TrustedTypes().then(() => {
	createRoot(document.getElementById('root')!).render(
		<StrictMode>
			<App />
		</StrictMode>,
	);
});
