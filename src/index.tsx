import { createRoot } from 'react-dom/client';
import { App } from 'components';
import '@fontsource/open-sans/latin-400.css';
import '@fontsource/open-sans/latin-800.css';

createRoot(document.getElementById('root') as HTMLElement).render(<App />);
