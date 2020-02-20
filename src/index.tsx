import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { reduxStore } from './store/reduxStore';

import App from './App';

import './index.scss';


ReactDOM.render(
    <Provider store={reduxStore}>
        <App />
    </Provider>,
    document.getElementById('root')
);
