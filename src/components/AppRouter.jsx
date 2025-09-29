import ErrorPage from '../pages/ErrorPage';
import Posts from '../pages/Posts';
import { Routes, Route } from 'react-router-dom';
import { routes } from '../router';

const AppRouter = () => {
	return (
		<Routes>
			{routes.map((route) => (
				<Route
					path={route.path}
					Component={route.component}
					exact={route.exact}
				/>
			))}
			<Route path="/" element={<Posts />} />
            <Route path="*" element={<ErrorPage />} />
		</Routes>
	);
};

export default AppRouter;
