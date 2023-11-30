import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import TodosProvider from './contexts/todos';
import './styles/app.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
    <TodosProvider>
        <App />
    </TodosProvider>
    </React.StrictMode>
);