import React, { useState } from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';

interface Props {}

const RepositoriesList: React.FC = (props: Props) => {
	const [term, setTerm] = useState('');

	// receive state (after typing)
	const { data, error, loading } = useTypedSelector(
		state => state.repositories
	);

	// get dispatch from actionCreators-binder
	const { searchRepositories } = useActions();

	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		searchRepositories(term);
	};
	return (
		<div>
			<form onSubmit={onSubmit}>
				<input type='text' onChange={e => setTerm(e.target.value)} />
				<button>Search</button>
			</form>
			{error && <h3>{error}</h3>}
			{loading && <h3>Loading...</h3>}
			{!error && !loading && data.map(item => <div key={item}>{item}</div>)}
		</div>
	);
};

export default RepositoriesList;
