import './styles/App.css';
import { useState } from 'react';
import PostList from './components/PostList';

import PostForm from './components/PostForm';
const App = () => {
	// eslint-disable-next-line no-unused-vars
	const [posts, setPosts] = useState([
		{ id: 1, title: 'Javascript', body: 'Description' },
		{ id: 2, title: 'Javascript 2', body: 'Description' },
		{ id: 3, title: 'Javascript 3', body: 'Description' },
	]);

	const [post, setPost] = useState({title: '', body: ''})

	const createPost = () => {
		setPosts()
	}

	return (
		<>
			<div className="App">
				<PostForm create={createPost}/>
				<PostList posts={posts} title="Список постов про JS" />
			</div>
		</>
	);
};

export default App;
