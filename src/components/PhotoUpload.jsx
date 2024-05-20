import { useState } from 'react';
import Button from './Button';
import PostBackground from '../assets/post_background.jpg';

const PhotoUpload = ({ onPhotoChange }) => {
	const [previewSrc, setPreviewSrc] = useState('');

	const handleFileChange = (event) => {
		const file = event.target.files[0];

		const reader = new FileReader();
		reader.onloadend = () => {
			setPreviewSrc(reader.result);
			onPhotoChange(reader.result);
		};
		if (file) {
			reader.readAsDataURL(file);
		} else {
			setPreviewSrc('');
			onPhotoChange('');
		}
	};

	return (
		<>
			<input type="file" id="fileInput" style={{ display: 'none' }} onChange={handleFileChange} />
			{!previewSrc && (
				<div className="btn-upload__wrapper">
					<img src={PostBackground} alt="White background" className="img-fluid img-upload" />
					<Button Button onClick={() => document.getElementById('fileInput').click()}>
						Upload Photo
					</Button>
				</div>
			)}

			{previewSrc && (
				<div className="photo__wrapper">
					<img src={previewSrc} alt="Selected image" className="img-fluid img-upload" />
					<Button onClick={() => document.getElementById('fileInput').click()}>Change photo</Button>
				</div>
			)}
		</>
	);
};

export default PhotoUpload;
