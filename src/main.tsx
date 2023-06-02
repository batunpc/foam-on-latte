import React from 'react';
import ReactDOM from 'react-dom/client';
import 'tailwindcss/tailwind.css';
import {WrappedApp} from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <WrappedApp/>
    </React.StrictMode>,
);
