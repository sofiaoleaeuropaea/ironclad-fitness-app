import { Link } from 'react-router-dom';

import ironclad_logo from '../assets/ironclad_logo.png';

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container">
				<div className="footer__wrapper">
					<div className="footer__menu">
						<Link to="/">
							<img src={ironclad_logo} className="img-fluid logo" alt="Ironclad Logo" />
						</Link>

						<ul>
							<li>
								<a href="/privacy" target="_blank">
									Privacy
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									Terms
								</a>
							</li>
							<li>
								<a href="#" target="_blank">
									Contacts
								</a>
							</li>
						</ul>
					</div>
					<div className="social_media">
						<a href="https://www.instagram.com/internationalhuntington/">
							<img src="images/instagram.png" />
						</a>
						<a href="https://www.instagram.com/internationalhuntington/">
							<img src="images/instagram.png" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
