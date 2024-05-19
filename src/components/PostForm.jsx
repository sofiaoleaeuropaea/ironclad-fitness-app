/* eslint-disable react/prop-types */

import { useNavigate } from 'react-router-dom';

const PostForm = ({ action, title, body, onTitleChange, onBodyChange, onSubmit }) => {
	const navigate = useNavigate();

	return (
		<section className='contacts'>
			<div className='contacts__wrapper'>
				<form onSubmit={onSubmit} className='contacts__form'>
					<h3> {action === 'update' ? 'Update Post' : action === 'delete' ? 'Delete Post' : 'Create Post'}</h3>

					<div className='contacts__input'>
						<label>Title</label>
						<input type='text' value={title} onChange={e => onTitleChange(e.target.value)} required />
					</div>

					<div className='contacts__input'>
						<label>Body</label>
						<textarea value={body} onChange={e => onBodyChange(e.target.value)} required />
					</div>

					<div className='contacts__input center'>
						{action === 'delete' ? (
							<>
								<button className='form__btns' type='button' onClick={onSubmit}>
									Delete
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						) : (
							<>
								<button className='form__btns' type='submit'>
									{action === 'update' ? 'Update' : 'Submit'}
								</button>
								<button className='form__btns' type='button' onClick={() => navigate('/')}>
									Cancel
								</button>
							</>
						)}
					</div>
				</form>
			</div>
		</section>
	);
};

export default PostForm;
