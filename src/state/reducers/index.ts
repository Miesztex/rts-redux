import { combineReducers } from 'redux';

import repositoriesReducer from './repositoriesReducer';

const reducers = combineReducers({
	repositories: repositoriesReducer,
});

export default reducers;

// declare that root store data is combined reducers
// === RepositoriesState
export type RootState = ReturnType<typeof reducers>;
