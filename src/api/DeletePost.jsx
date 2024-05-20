import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

import PostForm from '../components/PostForm';

const DeletePost = () => {
	const { id: postId } = useParams();
	const id = String(postId);
	const navigate = useNavigate();
	const { dispatch } = usePosts();
	const [post, setPost] = useState(null);

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`http://localhost:5000/posts/${id}`);
				const postData = await response.json();

				setPost(postData);
			} catch (error) {
				console.error('An error as occured:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleDelete = async () => {
		try {
			await fetch(`http://localhost:5000/posts/${id}`, {
				method: 'DELETE',
			});

			dispatch({ type: 'DELETE_POST', payload: id });

			navigate('/services/blog');
		} catch (error) {
			console.error('Error deleting post:', error);
		}
	};

	if (!post) return <div>Loading...</div>;

	return (
		<PostForm
			action="delete"
			title={post.title}
			description={post.description}
			photo={post.photo}
			name={post.name}
			onTitleChange={() => {}}
			onDescriptionChange={() => {}}
			onPhotoChange={() => {}}
			onNameChange={() => {}}
			onSubmit={handleDelete}
		/>
	);
};

export default DeletePost;
