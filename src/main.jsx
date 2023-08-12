import React from 'react';
import ReactDOM from 'react-dom/client';
import { ToggleProvider } from './context/nav.context';
import App from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ToggleProvider>
			<App />
		</ToggleProvider>
	</React.StrictMode>
);
