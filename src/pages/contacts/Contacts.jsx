import FormContact from './FormContact';
const Contacts = () => {
	return (
		<section id="contact" className="contact">
			<div className="container contact__wrapper">
				<div className="contact__details">
					<h3>How to find us</h3>
					<p>Mon-Fri - 6:00 - 22:30 </p>
					<p>Sat - 9:00 - 20:00</p>
					<p>Sun - 10:00 - 18:00</p>
					<p>Edifício Mirage, R. Dr. Eduardo Neves, Nº3 1050-077 Lisboa</p>
					<p>querosabermais@flag.pt</p>
					<p>239000000</p>
					{/* insert map */}
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
