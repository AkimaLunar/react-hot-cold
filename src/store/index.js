import { createStore, combineReducers, applyMiddleware } from 'redux';
import { username, games, min, max } from './reducers';
import initialState from './initialState';


const store = createStore(
    combineReducers({ username, games, min, max }),
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store;
