import { useState } from 'react';

import Buttons from '../../components/Buttons';

import { portfolio } from '../../data';

function Portfolio() {
	// const [isHovered, setIsHovered] = useState(false);

	// const handleMouseEnter = () => {
	// 	setIsHovered(true);
	// };

	// const handleMouseLeave = () => {
	// 	setIsHovered(false);
	// };

	return (
		<section id="portfolio" className="portfolio">
			<div className="container portfolio__wrapper">
				{portfolio.map((item) => (
					<div key={item.id} className={`portfolio__card ${item.className}`}>
						<div className="card__content">
							<h4>{item.title}</h4>
							<p className="card__description">{item.description}</p>
						</div>
						<Buttons href="/signup" className="btn__card">Start now</Buttons>
						{item.img && <img src={item.img} className="img-fluid card__img" alt={item.title} />}
					</div>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
