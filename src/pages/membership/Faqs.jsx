import Buttons from '../../components/Buttons';

function Faqs() {
	return (
		<section className="faqs">
			<div className="container">
				<div className="faqs__wrapper">
					<h4>YOU STILL HAVE QUESTIONS?</h4>
					<Buttons href="/contacts" >
						Get in touch
					</Buttons>

					<img className="img-fluid faqs__wrapper__img" src="images/membership.png" alt="Woman lifting" />
				</div>
			</div>
		</section>
	);
}

export default Faqs;
