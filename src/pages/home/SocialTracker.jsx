import { socialTracker } from '../../data';

function SocialTracker() {
	const duplicatedSlides = [...socialTracker, ...socialTracker];
	const SocialTrackerSlider = () => {
		return duplicatedSlides.map((slide, index) => {
			// const [categoryWordOne, categoryWordTwo] = item.category.split(' ');
			return (
				
					<div key={index} className="social-tracker__list" style={{ width: `${100 / slide.length}%` }}>
						<div className="social-tracker__item">
							<p>
								{slide.tracker} <span> {slide.category} </span>{' '}
							</p>
						</div>
						{/* <span>{item.tracker} </span>
					<p>{categoryWordOne}</p>
					<p>{categoryWordTwo}</p> */}
					</div>
			
			);
		});
	};

	return (
		<section id="social-tracker" className="social-tracker">
			<div className="social-tracker__slider">
				<SocialTrackerSlider />
			</div>
		</section>
	);
}

export default SocialTracker;
