import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';
import 

import { navigation } from '../data';
import Buttons from './Buttons';

const Navbar = () => {
	// const pathname = useLocation();

	// const [menuMobile, setMenuMobile] = useState(false);

	// const [menuBtn, setMenuBtn] = useState(false);

	// const toggleMenu = () => {
	// 	setMenuMobile((active) => !active);
	// 	setMenuBtn((active) => !active);

	// 	const section = document.getElementById(id);
	// 	if (section) {
	// 		section.scrollIntoView({ behavior: 'smooth' });
	// 	}
	// };

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
					<div className="logo">
						<Link to="/">
							<img src="../" alt="Ironclad Logo" />
						</Link>
					</div>
					<nav>
						<ul className="navbar__menu">
							{navigation.map((item) => (
								<li key={item.id}>
									<NavLink to={item.url}>{item.title}</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<Buttons href="/signup" className="btn_reverse effect_reverse">
						Start now
					</Buttons>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
