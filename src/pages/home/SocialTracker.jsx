import { socialTracker } from '../../data';

function SocialTracker() {
	return (
		<section id="social-tracker" className="social-tracker">
			<div className="container container__xl">
				<ul className="social-tracker__item">
					{socialTracker.map((item) => (
						<li key={item.id}>
							<span>{item.tracker} </span>
							{item.category}
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}

export default SocialTracker;
