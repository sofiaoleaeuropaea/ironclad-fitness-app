import { pricing } from '../../data';

import Heading from '../../components/Heading';
import Faqs from './Faqs';
import Button from '../../components/Button';

const Membership = () => {
	return (
		<>
			<section id="membership" className="membership">
				<Heading
					title="Membership"
					paragraph="We aim to cultivate an ever-growing community, spreading the message of health and wellness to the wider world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur
							aliquam quam, recusandae ipsa molestias molestiae, doloribus, modi accusantium fugiat qui repellat cupiditate vero. Voluptate facilis expedita ex nesciunt officia!"
				/>

				<div className="container ">
					<div className="membership__wrapper">
						{pricing.map((item) => (
							<div key={item.id} className="membership__card" id={`${item.className}`}>
								<div className="card__content">
									<h3>{item.title}</h3>
									<p>{item.price}</p>
									<div>
										<ul className="card__description">
											{item.features.map((feature, id) => (
												<li key={id}>{feature}</li>
											))}
										</ul>
									</div>
								</div>
								<Button href="/signup">Start now</Button>
							</div>
						))}
					</div>
					<div className="pt__wrapper">
						<div className="pt__content">
							<h3>Looking for a personal trainer?</h3>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima iste totam porro, neque vitae laudantium adipisci sapiente corrupti maxime.</p>
						</div>
						<Button href="/about" className="btn__mg-left">
							Say hello
						</Button>
						<img className="img-fluid pt__content__img" src="images/pesos.png" alt="" />
					</div>
				</div>
			</section>
			<Faqs />
		</>
	);
};

export default Membership;
