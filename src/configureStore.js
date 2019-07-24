import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import loggedUserState from './App/globalReducer';

export const history = createBrowserHistory();

const reducers=combineReducers({
    router: connectRouter(history),
    loggedUserState
});

const store = createStore(
    reducers,
    {},
    compose(applyMiddleware(routerMiddleware(history)))
);

export default store;
