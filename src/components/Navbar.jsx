import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import ironclad_logo from '../assets/ironclad_logo.png';
import { navigation } from '../data';

import NavbarLinks from './NavbarLinks';
import Buttons from './Buttons';

const Navbar = () => {
	// const pathname = useLocation();

	const [menuMobile, setMenuMobile] = useState(false);

	const [menuBtn, setMenuBtn] = useState(false);

	const toggleMenu = () => {
		setMenuMobile((active) => !active);
		setMenuBtn((active) => !active);

		const section = document.getElementById(id);
		if (section) {
			section.scrollIntoView({ behavior: 'smooth' });
		}
	};

	const [scrollPosition, setScrollPosition] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			setScrollPosition(window.scrollY);
		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`navbar ${scrollPosition > 60 ? 'navbar__scrolled' : ''}`}>
			<div className="container">
				<div className="navbar__wrapper">
					<Link to="/">
						<img src={ironclad_logo} className="img-fluid logo" alt="Ironclad Logo" />
					</Link>
					<nav>
						<ul className="navbar__menu">
							{navigation.map((item) => (
								<NavbarLinks key={item.id} item={item} />
							))}
						</ul>
					</nav>
					<div className={menuBtn ? 'navbar__hamburger active' : 'navbar__hamburger'} onClick={toggleMenu}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
					<Buttons href="/signup" className="btn effect">
						Start now
					</Buttons>
					
				</div>
			</div>
		</div>
	);
};

export default Navbar;
