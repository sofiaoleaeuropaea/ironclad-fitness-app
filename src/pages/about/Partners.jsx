import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { partners } from '../../data';

import Heading from '../../components/Heading';
import Accordion from '../../components/Accordion';

const Partnership = () => {
	const [accordionOpen, setAccordionOpen] = useState(null);
	const handleToggle = (index) => {
		setAccordionOpen((prevIndex) => (prevIndex === index ? null : index));
	};

	const titlePartners = "Our partners"
	const paragraphPartners= "At our fitness center, partnerships serve as the cornerstone of our dedication to cultivating a vibrant fitness community. We prioritize collaboration with top-tier brands and fitness authorities to elevate our members' gym experience. Through these partnerships, we provide exclusive perks, access to state-of-the-art equipment and training regimens, and thrilling events designed to ignite inspiration and motivation."

	return (
		<section id="partner" className="partner">
			<Heading
				title={titlePartners}
				paragraph={paragraphPartners}
			/>
			<div className="container">
				<div className="partner__accordion">
					{partners.map((partner, index) => (
						<Accordion
							key={partner.id}
							title={partner.title}
							content={partner.brands.map((brand, index) => (
								<li key={index}>
									<NavLink to={brand.url}>
										<img src={brand.logo} alt={brand.name} className="img-fluid partner__img" />
									</NavLink>
								</li>
							))}
							index={index}
							accordionOpen={accordionOpen}
							handleToggle={handleToggle}
						/>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partnership;
