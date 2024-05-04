import { socialTracker } from '../../data';

function SocialTracker() {
	const duplicatedSlides = [...socialTracker, ...socialTracker];
	const SocialTrackerSlider = () => {
		return duplicatedSlides.map((slide, index) => {
		
			return (
				
					<div key={index} className="social-tracker__list" style={{ width: `${100 / slide.length}%` }}>
						<div className="social-tracker__item">
							<p>
								{slide.tracker} <span> {slide.category} </span>{' '}
							</p>
						</div>
					
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
