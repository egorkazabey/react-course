import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import PostService from '../API/PostService';
import Loader from '../components/UI/loader/Loader';

const PostIdPage = () => {
	const params = useParams();
	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isPostLoading, postError] = useFetching(async (id) => {
		const response = await PostService.getById(id);
		setPost(response.data);
	});

	const [fetchComments, isComLoading, comError] = useFetching(async (id) => {
		const response = await PostService.getCommentsByPostId(id);
		setComments(response.data);
	});

	useEffect(() => {
		fetchPostById(params.id);
		fetchComments(params.id);
	}, []);

	return (
		<div>
			<h1>вы попали на страницу поста с ID {params.id}</h1>
			{isPostLoading ? (
				<Loader />
			) : (
				<div>
					{post.id}
					{post.title}
				</div>
			)}
			<h1>Комментарии</h1>
			{isComLoading ?
				<Loader />
                : <div>
                    {comments.map(com => 
                        <div style={{marginTop: 15}}>
                            <h5>{com.email}</h5>
                            <div>{com.body}</div>
                        </div>
                    )}
                </div>
			}
		</div>
	);
};

export default PostIdPage;
