import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppContextProvider from './context/AppContext';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AppContextProvider>
<App />
</AppContextProvider>

 
);



reportWebVitals();
