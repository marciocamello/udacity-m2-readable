import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './components/App'
import reducer from './reducers';
import middleware from './middleware';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import { BrowserRouter } from 'react-router-dom';

const store = createStore(reducer, middleware);

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

// expose store when run in Cypress
if (window.Cypress) {
    window.store = store
}