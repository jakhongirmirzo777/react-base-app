import {StrictMode} from 'react';
import {BrowserRouter} from "react-router-dom";
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';
import ErrorBoundary from "./layouts/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <ErrorBoundary>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </ErrorBoundary>
    </StrictMode>
);

