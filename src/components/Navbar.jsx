import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { navigation } from '../data';

import NavbarLinks from './NavbarLinks';
import Button from './Button';

const Navbar = () => {
	const [menuMobile, setMenuMobile] = useState(false);
	const [isChecked, setIsChecked] = useState(false);

	const handleCheckboxChange = () => {
		setMenuMobile((active) => !active);
		setIsChecked((checked) => !checked);
	};

	useEffect(() => {
		if (menuMobile) {
			disablePageScroll();
		} else {
			enablePageScroll();
		}
	}, [menuMobile]);

	const handleLinkMobileClick = () => {
		if (menuMobile) {
			setMenuMobile(false);
			setIsChecked(false);
		}
	};
	return (
		<div className="navbar">
			<div className="container container__xl">
				<div className="navbar__wrapper">
					<Link to="/">
						<img src="assets/images/ironclad_logo.png" className="img-fluid logo" alt="Ironclad Logo" />
					</Link>

					<nav>
						<ul className={menuMobile ? 'navbar__menu active' : 'navbar__menu'}>
							{navigation.map((item, index) => (
								<NavbarLinks key={index} item={item} onClick={handleLinkMobileClick} className={item.className} />
							))}
						</ul>
					</nav>
					<label className={`burger__wrapper ${isChecked ? 'checked' : ''}`}>
						<input type="checkbox" checked={isChecked} onChange={handleCheckboxChange} />
						<div className="burger__btn">
							<span className="bar"></span>
							<span className="bar"></span>
							<span className="bar"></span>
						</div>
					</label>

					<Button href="/signup" className="btn__hide">
						Start now
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
