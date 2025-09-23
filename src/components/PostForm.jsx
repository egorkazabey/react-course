import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import { useState } from 'react';
const PostForm = () => {
	const [post, setPost] = useState({ title: '', body: '' });

	const addNewPost = (e) => {
		e.preventDefault();
        const newPost = {
            ...post, id: Date.now()
        }
		setPost({ title: '', body: '' });
	};

	return (
		<form onSubmit={addNewPost}>
			<MyInput
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				type={'text'}
				placeholder={'Название поста'}
			/>
			<MyInput
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
				type={'text'}
				placeholder={'Описание поста'}
			/>
			<MyButton>Создать пост</MyButton>
		</form>
	);
};

export default PostForm;
