import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';

const UpdatePost = () => {
	const { id: postId } = useParams();
	const id = String(postId);
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [photo, setPhoto] = useState('');
	const [name, setName] = useState('');

	useEffect(() => {
		const fetchPost = async () => {
			try {
				const response = await fetch(`http://localhost:5000/posts/${id}`);
				const post = await response.json();

				setTitle(post.title);
				setDescription(post.description);
				setPhoto(post.photo);
				setName(post.name);
			} catch (error) {
				console.error('Erro ao buscar post:', error);
			}
		};

		fetchPost();
	}, [id]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`http://localhost:5000/posts/${id}`, {
				method: 'PUT',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, description, photo, name }),
			});

			const updatedPost = await response.json();

			dispatch({ type: 'UPDATE_POST', payload: updatedPost });

			navigate('/services/blog');
		} catch (error) {
			console.error('Error updating post:', error);
		}
	};

	return (
		<PostForm
			action="update"
			title={title}
			description={description}
			photo={photo}
			name={name}
			onTitleChange={setTitle}
			onDescriptionChange={setDescription}
			onPhotoChange={setPhoto}
			onNameChange={setName}
			onSubmit={handleSubmit}
		/>
	);
};

export default UpdatePost;
