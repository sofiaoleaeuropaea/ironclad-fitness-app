import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../hooks/usePosts';

import PostForm from '../components/PostForm';

const CreatePost = () => {
	const [title, setTitle] = useState('');
	const [description, setDescription] = useState('');
	const [photo, setPhoto] = useState('');
	const [name, setName] = useState('');
	const navigate = useNavigate();
	const { dispatch } = usePosts();

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch('http://localhost:5000/posts', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ title, description, photo, name }),
			});

			const data = await response.json();
			console.log(data);

			dispatch({ type: 'CREATE_POST', payload: data });

			navigate('/services/blog');
		} catch (error) {
			console.error('Erro ao criar post:', error);
		}
	};

	return (
		<>
			<PostForm
				action="create"
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
		</>
	);
};

export default CreatePost;
