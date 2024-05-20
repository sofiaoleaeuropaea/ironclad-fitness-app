import Heading from '../../components/Heading';
import Button from '../../components/Button';
import ScrollReveal from '../../components/ScrollReveal';

import { portfolio } from '../../data';

const Portfolio = () => {
	const titlePortfolio = ' A different gym experience';
	const paragraphPortfolio =
		"We redefine what it means to train. Our state-of-the-art facilities and expert trainers are dedicated to your success. Whether you're aiming for peak performance or simply looking to get in shape, we provide a supportive and motivating environment. Our personalized programs cater to all fitness levels, ensuring you reach your goals with confidence. Join us and experience the difference that a truly dedicated gym can make. Transform your life at Ironclad, where your journey to strength and wellness begins.";

	const PortFolios = () =>
		portfolio.map((item, index) => {
			return (
				<div key={index} className="portfolio__card" id={`${item.className}`}>
					<ScrollReveal>
						<div className="card__content">
							<h3>{item.title}</h3>
							<p className="card__description">{item.description}</p>
						</div>
					</ScrollReveal>
					<Button href={item.url} className="btn__mg-right__desktop btn__white-bg">
						Know more
					</Button>
					{item.img && <img src={item.img} className="img-fluid card__img" id={item.id} alt={item.title} />}
				</div>
			);
		});

	return (
		<section id="portfolio" className="portfolio">
			<Heading title={titlePortfolio} paragraph={paragraphPortfolio} />

			<div className="container ">
				<ScrollReveal>
					<div className="portfolio__wrapper">
						<PortFolios />
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
};

export default Portfolio;
