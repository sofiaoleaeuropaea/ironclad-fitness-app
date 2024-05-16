import Button from '../../components/Button';
import ScrollReveal from '../../components/ScrollReveal';
function Hero() {
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
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam fuga reiciendis Lorem ipsum dong elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga
								reici..elit. Inventore ullam fuga reiciendis ipsum- dong elit. Inventore ullam fuga reici..elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga reici..
							</p>
						</ScrollReveal>
						<ScrollReveal>
							<Button href="/signup">Start now</Button>
						</ScrollReveal>
					</div>
					<div className="hero__image">
						<ScrollReveal>
							<img src="images/hero_mobile.png" className="img-fluid" id="hero-img_mobile" alt="Strong men" />
							<img src="images/hero_desktop.png" className="img-fluid" id="hero-img_desktop" alt="Strong men" />
						</ScrollReveal>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
