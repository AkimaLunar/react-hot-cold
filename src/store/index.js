import { createStore, combineReducers, applyMiddleware } from 'redux';
import { username, games, min, max } from './reducers';
import initialState from './initialState';

const logger = store => next => action => {
    let result;
    console.groupCollapsed('dispatching', action.type);
    console.log('Prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('Next state', store.getState());
    console.groupEnd();
};
const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};
const store = createStore(
    combineReducers({ username, games, min, max }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
const storeFactory = (initialState=initialState) => 
    applyMiddleware(logger, saver)(createStore)(
        combineReducers({ username, games, min, max }),
        (localStorage['redux-store']) ?
            JSON.parse(localStorage['redux-store']) :
            initialState
    );

export default storeFactory;
