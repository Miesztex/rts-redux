import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

// reducer, int state, middleware
export const store = createStore(reducers, {}, applyMiddleware(thunk));
