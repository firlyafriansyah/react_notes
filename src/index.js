import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './sections/App';
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(<App />);