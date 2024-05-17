import Heading from '../../components/Heading';
import Button from '../../components/Button';
import ScrollReveal from '../../components/ScrollReveal';

import { portfolio } from '../../data';

const Portfolio = () => {
	return (
		<section id="portfolio" className="portfolio">
			<Heading
				title=" A different gym experience"
				paragraph="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod modi ad quisquam unde! Dolores repellat quos fugiat reprehenderit, quaerat hic, facilis quisquam sapiente quia sint
							assumenda! Dolores repellat quos fugiat reprehenderit, quaerat hic, facilis quisquam sapiente quia sint assumenda! Dolores repellat quos fugiat reprehenderit, quaerat hic, facilis
							quisquam sapiente quia sint assumenda!"
			/>

			<div className="container ">
				<ScrollReveal>
					<div className="portfolio__wrapper">
						{portfolio.map((item, index) => (
							<div key={index} className="portfolio__card" id={`${item.className}`}>
								<ScrollReveal>
									<div className="card__content">
										<h3>{item.title}</h3>
										<p className="card__description">{item.description}</p>
									</div>
								</ScrollReveal>
								<Button href={item.url} className="btn__mg-right__desktop">
									Know more
								</Button>
								{item.img && <img src={item.img} className="img-fluid card__img" id={item.id} alt={item.title} />}
							</div>
						))}
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
};

export default Portfolio;
