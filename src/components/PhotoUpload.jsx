import { useState } from 'react';
import Button from './Button';

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
			{previewSrc ? (
				<div className="photo__wrapper post-img-wrapper">
					<img src={previewSrc} alt="Selected image" className="img-fluid post-img" />
					<Button onClick={() => document.getElementById('fileInput').click()}>Change photo</Button>
				</div>
			) : (
				<div className="btn-upload__wrapper post-img-wrapper">
					<img src="/assets/images/post_background.jpg" alt="White background" className="img-fluid post-img" />
					<Button onClick={() => document.getElementById('fileInput').click()}>Upload Photo</Button>
				</div>
			)}
		</>
	);
};

export default PhotoUpload;
