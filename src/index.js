import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './assets/style/GlobalStyle.scss';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './reducers';
const store = createStore(reducers, applyMiddleware(thunk));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Router>
                <App />
            </Router>
        </Provider>
    </React.StrictMode>,
);
