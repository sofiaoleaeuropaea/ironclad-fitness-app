import FormContact from './FormContact';
import DirectionsMap from './DirectionsMap';
import ScrollReveal from '../../components/ScrollReveal';
const Contacts = () => {
	return (
		<>
			<section id="contact__information" className="contact__information">
				<div className="container ">
					<div className="contact__information__wrapper ">
						<div className="contact__information__details">
							<ScrollReveal>
								<h2>How to find us</h2>
							</ScrollReveal>
							<div className="contact__details_schedule">
								<ScrollReveal>
									<p>
										<span> Mon-Fri</span> <time dateTime="T06:00">6:00 am</time> - <time dateTime="T22:30">10:30 pm</time>
									</p>

									<p>
										<span> Sat</span> <time dateTime="T09:00">9:00 am</time> - <time dateTime="T20:00">8:00 pm</time>
									</p>

									<p>
										<span> Sun</span> <time dateTime="T10:00">10:00 am</time> - <time dateTime="T18:00">6:00 pm</time>
									</p>
								</ScrollReveal>
							</div>
							<ScrollReveal>
								<address>
									<a>Edifício Mirage, R. Dr. Eduardo Neves, Nº3, 1050-077 Lisboa</a>
								</address>
							</ScrollReveal>
							<ScrollReveal>
								<address>
									<a href="mailto:querosabermais@flag.pt">querosabermais@flag.pt</a>
								</address>
							</ScrollReveal>
							<ScrollReveal>
								<address>
									<a href="tel:+351239000000">(+351) 239000000</a>
								</address>
							</ScrollReveal>
						</div>

						<DirectionsMap />
					</div>
				</div>
			</section>

			<section id="contact__form" className="contact__form">
				<div className="container ">
					<div className="contact-form__wrapper">
						<ScrollReveal>
							<h2>Let's talk</h2>
						</ScrollReveal>
						<ScrollReveal>
							<FormContact />
						</ScrollReveal>
					</div>
				</div>
			</section>
		</>
	);
};

export default Contacts;
