

import Button from '../../components/Button';

function Faqs() {
	
	return (
		<section className="faqs">
			<div className="container">
				<div className="faqs__wrapper">
					<h4>YOU STILL HAVE QUESTIONS?</h4>
					<Button href="/contacts#contact__form">Get in touch</Button>

					<img className="img-fluid faqs__wrapper__img" src="images/membership.png" alt="Woman lifting" />
				</div>
			</div>
		</section>
	);
}

export default Faqs;
