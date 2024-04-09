import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

import { navigation } from '../data';

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
						
					</div>
					<nav>
						<ul className="navbar__menu">
							{navigation.map((item) => {
								<li>
									<NavLink key={item.id} to={item.url}>
										{item.title}
									</NavLink>
								</li>;
							})}
						</ul>
					</nav>
					{/* <div className={menuBtn ? 'navbar__hamburger active' : 'navbar__hamburger'} onClick={toggleMenu}>
						<span className="bar"></span>
						<span className="bar"></span>
						<span className="bar"></span>
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Navbar;
