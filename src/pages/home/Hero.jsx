import hero_men from '../assets/hero_men.png';

function Hero() {
	return (
		<section id="hero" className="hero">
			<div>
				<h1> Push yourself harder</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ullam fuga reiciendis.</p>
			</div>
            <img src={hero_men} alt="" />
		</section>
	);
}

export default Hero;
