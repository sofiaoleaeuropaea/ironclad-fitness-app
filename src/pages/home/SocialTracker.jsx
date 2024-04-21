import { socialTracker } from '../../data';

function SocialTracker() {
	const SocialTrackerList = () => {
		return socialTracker.map((item) => {
			const [categoryWordOne, categoryWordTwo] = item.category.split(' ');
			return (
				<div key={item.id} className="social-tracker__item" style={{ display: 'flex' }}>
					<span>{item.tracker} </span>
					<p>{categoryWordOne}</p>
					<p>{categoryWordTwo}</p>
				</div>
			);
		});
	};

	return (
		<section id="social-tracker" className="social-tracker">
			<div className="social-tracker__list">
				<SocialTrackerList />
			</div>
		</section>
	);
}

export default SocialTracker;
