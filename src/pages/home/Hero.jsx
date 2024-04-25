import Buttons from '../../components/Buttons';

import hero_mobile from '../../assets/hero_mobile.png';
import hero_desktop from '../../assets/hero_desktop.png';

function Hero() {
	return (
		<section id="hero" className="hero">
			<div className="container">
				<div className="hero__wrapper">
					<div className="hero__content">
						<h1>Were strength meets inspiration</h1>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam fuga reiciendis Lorem ipsum dong elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga
							reici..elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga reici..elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga reici..
						</p>
						<Buttons href="/signup">Start now</Buttons>
					</div>
					<div className="hero__image">
						<img src={hero_mobile} className="img-fluid" id="hero-img_mobile" alt="Strong men" loading="lazy" />
						<img src={hero_desktop} className="img-fluid" id="hero-img_desktop" alt="Strong men" loading="lazy" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
