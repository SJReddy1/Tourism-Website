import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './main_styles.css'
import './responsive.css'
import './animate.css'
import "./App.css";
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "bootstrap/dist/css/bootstrap.min.css";
import './owl.corousel.css'
import './owl.theme.default.css'
import App from './App';
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './api/query-client';
import { CookiesProvider } from 'react-cookie';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<CookiesProvider defaultSetOptions={{ path: '/' }}>
				<App />
			</CookiesProvider>
		</QueryClientProvider>
	</React.StrictMode>,
)

