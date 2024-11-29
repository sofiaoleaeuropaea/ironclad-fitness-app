import { HiCheckCircle } from 'react-icons/hi';
import { pricing } from '../../data';
import Heading from '../../components/Heading';
import Faqs from './Faqs';
import Button from '../../components/Button';
import ScrollReveal from '../../components/ScrollReveal';

const Membership = () => {
	const titleMembership = 'Membership';
	const paragraphMembership =
		'We aim to cultivate an ever-growing community, spreading the message of health and wellness to the wider world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur aliquam quam, recusandae ipsa molestias molestiae, doloribus, modi accusantium fugiat qui repellat cupiditate vero. Voluptate facilis expedita ex nesciunt officia!';

	const Pricing = () =>
		pricing.map((item, index) => {
			return (
				<ScrollReveal key={index}>
					<div className="membership__card" id={`${item.className}`}>
						<div className="card__content">
							<div className="card__heading">
								<ScrollReveal>
									<h3>{item.title}</h3>
									<p>
										<span className="price">{item.price.split('/')[0]}</span>
										<span className="price-unit">{`/${item.price.split('/')[1]}`}</span>
									</p>
								</ScrollReveal>
							</div>

							<ul className="card__description">
								<ScrollReveal>
									{item.features.map((feature, id) => (
										<div key={id} className="card__item">
											<HiCheckCircle className="check-circle__icon" /> <li>{feature}</li>
										</div>
									))}
								</ScrollReveal>
							</ul>
						</div>
						<ScrollReveal>
							<Button href="/signup">Start now</Button>
						</ScrollReveal>
					</div>
				</ScrollReveal>
			);
		});
	return (
		<>
			<section id="membership" className="membership">
				<Heading title={titleMembership} paragraph={paragraphMembership} className="mobile_resize" />

				<div className="container ">
					<div className="membership__wrapper">
						<Pricing />
					</div>
					<ScrollReveal>
						<div className="pt__wrapper">
							<div className="pt__content">
								<ScrollReveal>
									<h3>Looking for a personal trainer?</h3>
									<p>Let our experienced trainers guide you to success, whether you're a beginner or advanced, with Ironclad's personalized approach to unlocking your potential.</p>
								</ScrollReveal>
							</div>
							<ScrollReveal>
								<Button href="/about#team" className="btn__mg-left">
									Say hello
								</Button>
							</ScrollReveal>
							<img className="img-fluid pt__content__img" src="assets/images/gym-weights.png" alt="Gym weights" />
						</div>
					</ScrollReveal>
				</div>
			</section>
			<Faqs />
		</>
	);
};

export default Membership;
