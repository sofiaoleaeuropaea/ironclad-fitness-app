import { Link } from 'react-router-dom';
import { SlSocialInstagram, SlSocialFacebook } from 'react-icons/sl';

import { footer } from '../data';

import FooterLinks from './FooterLinks';
import ScrollReveal from './ScrollReveal';

const Footer = () => {
	return (
		<footer id="footer" className="footer">
			<div className="container  container__xl">
				<div className="footer__wrapper">
					<div className="footer__wrapper_left">
						<ScrollReveal>
							<Link to="/">
								<img src="assets/images/ironclad_logo.png" className="img-fluid logo" alt="Ironclad Logo" />
							</Link>
						</ScrollReveal>
						<ScrollReveal>
							<ul className="footer__menu">
								{footer.map((item) => (
									<FooterLinks key={item.id} item={item} />
								))}
							</ul>
						</ScrollReveal>
					</div>
					<div className="footer__social">
						<ScrollReveal>
							<Link to="*">
								<SlSocialFacebook className="social_icons" />
							</Link>
						</ScrollReveal>
						<ScrollReveal>
							<Link to="*">
								<SlSocialInstagram className="social_icons" />
							</Link>
						</ScrollReveal>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
