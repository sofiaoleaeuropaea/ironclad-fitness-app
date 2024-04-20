import Buttons from '../../components/Buttons';

import hero_image from '../../assets/hero_image.png';

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
						<img src={hero_image} className="img-fluid" alt="Strong men" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default Hero;
