import FormContact from './FormContact';
const Contacts = () => {
	return (
		<section id="contact" className="contact">
			<div className="container contact__wrapper">
			
				<div className="contact__details">
					<h3>How to find us</h3>
				</div>
				<div className="contact__form">
					<h3>We're here to help you</h3>
					<p>Shot us a message if you have any question.</p>
					<FormContact />
				</div>
			</div>
		</section>
	);
};

export default Contacts;
