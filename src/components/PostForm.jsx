import { useNavigate } from 'react-router-dom';
import Button from './Button';
import PhotoUpload from './PhotoUpload';

const PostForm = ({ action, title, name, description, onTitleChange, onDescriptionChange, onNameChange, onPhotoChange, onSubmit }) => {
	const navigate = useNavigate();

	return (
		<section className="post">
			<div className="container">
				<div className="post__wrapper">
					<h3 id="post-title"> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>
					<form className="form" onSubmit={onSubmit}>
						<PhotoUpload onPhotoChange={onPhotoChange} />

						<input className="form__information" placeholder="Title" type="text" value={title} onChange={(e) => onTitleChange(e.target.value)} required />
						<input className="form__information" placeholder="Name" type="text" value={name} onChange={(e) => onNameChange(e.target.value)} required />
						<textarea className="form__information textarea__custom" placeholder="Description" maxLength={220} value={description} onChange={(e) => onDescriptionChange(e.target.value)} required />

						<div className="form__btn">
							{action === 'delete' ? (
								<>
									<Button type="button" onClick={onSubmit}>
										Delete
									</Button>
									<Button type="button" onClick={() => navigate('/services/blog')}>
										Cancel
									</Button>
								</>
							) : (
								<>
									<Button type="submit">{action === 'update' ? 'Update' : 'Submit'}</Button>
									<Button type="button" onClick={() => navigate('/services/blog')}>
										Cancel
									</Button>
								</>
							)}
						</div>
					</form>
				</div>
			</div>
		</section>
	);
};

export default PostForm;
