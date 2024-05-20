import Button from '../../components/Button';
import heroDesktop from '../../assets/images/hero_desktop.png';
import heroMobile from '../../assets/images/hero_mobile.png';
import ScrollReveal from '../../components/ScrollReveal';
const Hero = () => {
	return (
		<section id="hero" className="hero">
			<div className="container">
				<div className="hero__wrapper">
					<div className="hero__content">
						<ScrollReveal>
							<h1>
								Push <span className="span-heading">yourself</span> harder, be <span className="span-heading">better</span>!
							</h1>
						</ScrollReveal>
						<ScrollReveal>
							<p>
								Welcome to Ironclad, where strength meets endurance. Our mission is to help you achieve your fitness goals with expert guidance and top-notch facilities. Join us to build your ironclad
								body and mind. Start your journey today and discover the true potential within you. Empower yourself and thrive.
							</p>
						</ScrollReveal>
						<ScrollReveal>
							<Button href="/signup" className="btn__bg-color__inverse">
								Start now
							</Button>
						</ScrollReveal>
					</div>
					<div className="hero__image">
						<ScrollReveal>
							<img src={heroMobile} className="img-fluid" id="hero-img_mobile" alt="Strong men" />
							<img src={heroDesktop} className="img-fluid" id="hero-img_desktop" alt="Strong men" />
						</ScrollReveal>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
