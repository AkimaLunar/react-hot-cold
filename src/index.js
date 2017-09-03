import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import storeFactory from './store';
import { CurrentGame } from './components/connectors';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = storeFactory();
window.React = React;
window.store = store;

ReactDOM.render(
    <Provider store={store}>
        <CurrentGame />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
