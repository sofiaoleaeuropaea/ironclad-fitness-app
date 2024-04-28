import { useState } from 'react';

import Heading from '../../components/Heading';
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
			<Heading
				title=" A different gym experience"
				paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod modi ad quisquam unde! Dolores repellat quos fugiat reprehenderit, quaerat hic, facilis quisquam sapiente quia sint
							assumenda! Dolores repellat quos fugiat reprehenderit, quaerat hic, facilis quisquam sapiente quia sint assumenda! Dolores repellat quos fugiat reprehenderit, quaerat hic, facilis
							quisquam sapiente quia sint assumenda!"
			/>

			<div className="container ">
				<div className="portfolio__wrapper">
					{portfolio.map((item, index) => (
						<div key={index} className="portfolio__card" id={`${item.className}`}>
							<div className="card__content">
								<h3>{item.title}</h3>
								<p className="card__description">{item.description}</p>
							</div>
							<Buttons href={item.url} className="btn__mg-right">
								Know more
							</Buttons>
							{item.img && <img src={item.img} className="img-fluid card__img" alt={item.title} loading="lazy" />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
