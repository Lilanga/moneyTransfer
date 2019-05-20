import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import {rootReducer, rootSaga} from './index';

const configureStore = (initialState) => {
    const sagaMiddleware = createSagaMiddleware();
    
    // TODO: use redux-devtools-extension
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

    const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

    store.sagaTask = sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;