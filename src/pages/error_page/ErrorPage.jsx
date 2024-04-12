import { Link } from 'react-router-dom';

import ironclad_logo from '../../assets/ironclad_logo.png';

const ErrorPage = () => {
	return (
		<section id="error" className="error">
			<div className="container">
				<div className="error__wrapper">
					<div className="loader">
						<div data-glitch="404 ERROR" className="glitch">
							404 ERROR
						</div>
					</div>

					<p className="error__message">Please, go back to our homepage</p>
					<Link to="/">
						<img src={ironclad_logo} className="img-fluid logo" alt="Ironclad Logo" />
					</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
