import { createStore, compose } from 'redux';

import reducers from './reducer';

export default function store() {
    const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
    const store = createStore(reducers, composeEnhancers);
    return store;
};