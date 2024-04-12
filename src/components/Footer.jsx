import { Link } from 'react-router-dom';
import { SlSocialInstagram, SlSocialFacebook, SlSocialYoutube } from 'react-icons/sl';


import { footer } from '../data';
import ironclad_logo from '../assets/ironclad_logo.png';

import FooterLinks from './FooterLinks';

const Footer = () => {

	return (
		<footer id="footer" className="footer">
			<div className="container  container__xl">
				<div className="footer__wrapper">
					<div className="footer__wrapper_left">
						<Link to="/">
							<img src={ironclad_logo} className="img-fluid logo" alt="Ironclad Logo" />
						</Link>

						<ul className="footer__menu">
							{footer.map((item) => (
								<FooterLinks key={item.id} item={item} />
							))}
						</ul>
					</div>
					<div className="footer__social">
						<Link to="*">
							<SlSocialFacebook socialMediaStyle className='social_icons' />
						</Link>
						<Link to="*">
							<SlSocialInstagram socialMediaStyle className='social_icons'/>
						</Link>
					
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
