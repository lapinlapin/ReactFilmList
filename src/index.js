import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import reducers from './reducers';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';

const store = createStore(reducers);

injectTapEventPlugin();
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
