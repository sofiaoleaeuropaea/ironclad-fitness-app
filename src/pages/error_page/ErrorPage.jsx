import React from 'react';

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
				</div>
			</div>
		</section>
	);
};

export default ErrorPage;
