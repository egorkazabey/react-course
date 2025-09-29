import './styles/App.css';
import { BrowserRouter} from 'react-router-dom';
import NavBar from './components/UI/navBar/NavBar';
import AppRouter from './components/AppRouter';
const App = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<AppRouter />
			</BrowserRouter>
		</div>
	);
};

export default App;
