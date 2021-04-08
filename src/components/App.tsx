import { Provider } from 'react-redux';
import { store } from '../state';

import RepositoriesList from './RepositoriesList';

interface Props {}

const App = (props: Props) => {
	return (
		<Provider store={store}>
			<div>
				<h1>Search for a Package</h1>
			</div>
			<RepositoriesList />
		</Provider>
	);
};

export default App;
