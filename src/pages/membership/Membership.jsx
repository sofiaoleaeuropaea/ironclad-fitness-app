import { pricing } from '../../data';
import Buttons from '../../components/Buttons';

import Faqs from './Faqs';

const Membership = () => {
	return (
		<>
			<section id="membership" className="membership">
				<div className="membership__heading">
					<div className="container ">
						<div className="membership__heading__content">
							<h2>Membership</h2>
							<p>
								We aim to cultivate an ever-growing community, spreading the message of health and wellness to the wider world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur
								aliquam quam, recusandae ipsa molestias molestiae, doloribus, modi accusantium fugiat qui repellat cupiditate vero. Voluptate facilis expedita ex nesciunt officia!
							</p>
						</div>
					</div>
				</div>
				<div className="container ">
					<div className="membership__wrapper">
					
						{pricing.map((item) => (
							<div key={item.id} className="membership__card" id={`${item.className}`}>
								<div className="card__content">
									<h3>{item.title}</h3>
									<p>{item.price}</p>
									<p className="card__description">{item.features}</p>
								</div>
								<Buttons href="/signup" className="btn__card">
									Start now
								</Buttons>
							</div>
						))}
					</div>
				</div>
			</section>
			<Faqs/>
		</>
	);
};

export default Membership;
