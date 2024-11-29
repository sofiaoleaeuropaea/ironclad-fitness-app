import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<section id="error" className="error">
			<div className="container">
				<div className="error__wrapper">
					<div className="error__glitch">
						<div data-glitch="404 ERROR" className="glitch">
							404 ERROR
						</div>
					</div>
					<div className="error__info">
						<p className="error__message">Please, go back to our homepage.</p>
						<Link to="/">
							<img src="assets/images/ironclad_logo_branco.png" className="img-fluid logo" alt="Ironclad Logo" />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
