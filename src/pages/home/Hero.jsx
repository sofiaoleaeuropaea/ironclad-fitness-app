import Buttons from '../../components/Buttons';

import { socialTracker } from '../data';

import hero_image from '../../assets/hero_image.png';

function Hero() {
	return (
		<section id="hero" className="hero">
			<div className="container ">
				<img src={hero_image} alt="Men " />
				<div className="hero__content">
					<h1> Push yourself harder</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam fuga reiciendis Lorem ipsum dong elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga
						reici..elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga reici..elit. Inventore ullam fuga reiciendis ipsum dong elit. Inventore ullam fuga reici..
					</p>
					<Buttons href="/signup" className="btn__hide">
						Start now
					</Buttons>
				</div>

				<div className="hero__tracker">
					<li key={item.id}>
						{item.tracker}
					</li>
				</div>
			</div>
		</section>
	);
}

export default Hero;
