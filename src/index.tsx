import ReactDOM from 'react-dom';
import App from './components/App';
const Main: React.FC = () => {
	return <App></App>;
};

export default Main;

ReactDOM.render(<Main />, document.querySelector('#root'));
