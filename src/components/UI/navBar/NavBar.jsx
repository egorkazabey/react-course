import { Link } from 'react-router-dom';

const NavBar = () => {
	return (
		<nav className="navbar">
			<div className="navbar__links">
				<Link to="/posts">Посты</Link> | <Link to="/about">О сайте</Link> |{' '}
			</div>
		</nav>
	);
};

export default NavBar;
