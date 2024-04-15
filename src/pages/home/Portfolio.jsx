import { useState } from 'react';

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
          <div key={item.id} className={`portfolio__card ${item.className}`}  >
						<h4>{item.title}</h4>
						<p className="portfolio__card__description">{item.description}</p>
					</div>
				))}
			</div>
		</section>
	);
}

export default Portfolio;
