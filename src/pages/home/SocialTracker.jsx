import { socialTracker } from '../../data';
import ScrollReveal from '../../components/ScrollReveal';

function SocialTracker() {
	const duplicatedSlides = [...socialTracker, ...socialTracker];
	const SocialTrackerSlider = () => {
		return duplicatedSlides.map((slide, index) => {
			return (
				<div key={index} className="social-tracker__list" style={{ width: `${100 / slide.length}%` }}>
					<div className="social-tracker__item">
						<p className="small-heading">
							{slide.tracker} <span className="small-heading"> {slide.category} </span>{' '}
						</p>
					</div>
				</div>
			);
		});
	};

	return (
		<section id="social-tracker" className="social-tracker">
			<ScrollReveal>
				<div className="social-tracker__slider">
					<SocialTrackerSlider />
				</div>
			</ScrollReveal>
		</section>
	);
}

export default SocialTracker;
