import { Link } from 'react-router-dom';

const ErrorPage = () => {
	return (
		<section id="error" className="error">
			<div className="container">
				<div className="error__wrapper">
					<div class="loader">
						<div data-glitch="404 ERROR" class="glitch">
							404 ERROR
						</div>
					</div>
					<Link to="/">Go back to our homepage</Link>
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
