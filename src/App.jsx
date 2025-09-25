import './styles/App.css';
import { useEffect, useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';
import MyInput from './components/UI/input/MyInput';
import MyButton from './components/UI/button/MyButton';
import Loader from './components/UI/loader/Loader';
import PostFilter from './components/PostFilter';
import Pagination from './components/UI/pagination/Pagination';
import MyModal from './components/UI/modal/MyModal';
import PostService from './API/PostService';
import { usePosts } from './hooks/usePosts';
import { useFetching } from './hooks/useFetching';
import { getPageCount, getPagesArray } from './utils/pages';
const App = () => {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({ sort: '', query: '' });
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(1);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
		const responce = await PostService.getAll(limit, page);
		setPosts(responce.data);
		const totalCount = responce.headers['x-total-count'];
		setTotalPages(getPageCount(totalCount, limit));
	});

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};

	useEffect(() => {
		fetchPosts(limit, page);
	}, [page]);

	// async function fetchPosts() {
	// 	setIsPostsLoading(true);
	// 	const posts = await PostService.getAll();
	// 	setPosts(posts);
	// 	setIsPostsLoading(false);
	// }

	const removePost = (post) => {
		setPosts(posts.filter((p) => p.id !== post.id));
	};

	const changePage = (page) => {
		setPage(page);
	};

	return (
		<>
			<div className="App">
				<MyButton style={{ marginTop: '30px' }} onClick={() => setModal(true)}>
					Создать пользователя
				</MyButton>
				<MyModal visible={modal} setVisible={setModal}>
					<PostForm create={createPost} />
				</MyModal>
				<PostFilter filter={filter} setFilter={setFilter} />
				{postError && <h1>Произошла ошибка {postError}</h1>}
				{isPostsLoading ? (
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '50px',
						}}
					>
						<Loader />
					</div>
				) : (
					<PostList
						remove={removePost}
						posts={sortedAndSearchedPosts}
						title="Список постов про JS"
					/>
				)}
				<Pagination
					page={page}
					changePage={changePage}
					totalPages={totalPages}
				/>
			</div>
		</>
	);
};

export default App;
