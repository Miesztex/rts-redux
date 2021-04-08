import { ActionType } from '../actions-types';
import { Action } from '../actions';

interface RepositoriesState {
	loading: boolean;
	error: null | string;
	data: string[];
}

export default (
	state: RepositoriesState,
	action: Action
): RepositoriesState => {
	switch (action.type) {
		case ActionType.SEARCH_REPOSITORIES:
			return { ...state, loading: true, error: null, data: [] };
		case ActionType.SEARCH_REPOSITORIES_SUCCESS:
			return { ...state, loading: false, error: null, data: action.payload };
		case ActionType.SEARCH_REPOSITORIES_ERROR:
			return { ...state, loading: false, error: 'action.payload', data: [] };
		default:
			return state;
	}
};
