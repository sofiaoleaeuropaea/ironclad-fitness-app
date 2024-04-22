import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import { IoIosArrowForward, IoIosArrowDown } from 'react-icons/io';

import Heading from '../../components/Heading';
import { partners } from '../../data';

const Partnership = () => {
	const [accordionOpen, setAccordionOpen] = useState(null);
	const onItemClick = (index) => {
		setAccordionOpen(index === accordionOpen ? null : index);
	};

	return (
		<section id="partner" className="partner">
			<Heading
				title="Our partners"
				paragraph="At our fitness center, partnerships serve as the cornerstone of our dedication to cultivating a vibrant fitness community. We prioritize collaboration with top-tier brands and fitness authorities to elevate our members' gym experience. Through these partnerships, we provide exclusive perks, access to state-of-the-art equipment and training regimens, and thrilling events designed to ignite inspiration and motivation."
			/>
			<div className="container">
				<div className="partner__wrapper">
					{partners.map((item, index) => (
						<div key={item.id} className="partner__accordion">
							<button className="partner__accordion__title" onClick={() => onItemClick(index)}>
								<span>{item.title}</span>
								<div >
									<span></span>
									<span></span>
								</div>
								{/* <IoIosArrowForward className={` arrow ${accordionOpen === index ? 'active' : ''}`} /> */}
							</button>

							<div className={`partner__accordion__content ${accordionOpen === index ? 'active' : ''}`}>
								<ul>
									{item.brands.map((brands, index) => (
										<li key={index}>
											<NavLink to={brands.url}>
												<img src={brands.logo} alt={brands.name} className="img-fluid partner__img" />
											</NavLink>
										</li>
									))}
								</ul>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partnership;
