import { pricing } from '../../data';
import Buttons from '../../components/Buttons';

const Programs = () => {
	return (
		<section id="programs" className="programs">
			<div className="container ">
				<div className="program__wrapper">
					<div>
						<p>We aim to cultivate an ever-growing community, spreading the message of health and wellness to the wider world. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim pariatur aliquam quam, recusandae ipsa molestias molestiae, doloribus, modi accusantium fugiat qui repellat cupiditate vero. Voluptate facilis expedita ex nesciunt officia!</p>
					</div>
					<div>
						{pricing.map((item) => (
							<div key={item.id} className={`portfolio__card ${item.className}`}>
								<div className="card__content">
									<h2>{item.title}</h2>
									<h3>{item.price}</h3>
									<p className="card__description">{item.features}</p>
								</div>
								<Buttons href="/signup" className="btn__card">
									Start now
								</Buttons>
							</div>
						))}
					</div>
					<div>
						<h4>YOU STILL HAVE QUESTIONS?</h4>
						<Buttons href="/contacts" className="btn__card">
							Get in touch
						</Buttons>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Programs;
