import WomanLifting from '../../assets/images/membership.png';
import Button from '../../components/Button';
import ScrollReveal from '../../components/ScrollReveal';

function Faqs() {
	return (
		<section className="faqs">
			<div className="container">
				<div className="faqs__wrapper">
					<ScrollReveal>
						<h2 className="medium-heading">You still have questions?</h2>
						<Button href="/contacts#contact__form " className="btn__bg-color">
							Get in touch
						</Button>

						<img className="img-fluid faqs__wrapper__img" src={WomanLifting} alt="Woman lifting" />
					</ScrollReveal>
				</div>
			</div>
		</section>
	);
}

export default Faqs;
