import PostItem from "./PostItem";

const PostList = ({ posts, title }) => {
	return (
		<div>
			<h1 style={{ textAlign: 'center' }}>{title}</h1>
			{posts.map((post, index) => (
				<PostItem number={index} post={post} key={post.id} />
			))}
		</div>
	);
};

export default PostList;
