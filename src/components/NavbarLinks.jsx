import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavbarLinks = ({ item }) => {
	const [isHovered, setIsHovered] = useState(false);
	const pathname = useLocation();

	const handleMouseEnter = () => {
		if (!isHovered) {
			setIsHovered(true);
		}
	};

	const handleMouseLeave = () => {
		if (isHovered) {
			setIsHovered(false);
		}
	};

	const linkStyles = {
		transform: isHovered ? 'rotate(-15deg)' : 'none',
		transition: 'transform 0.2s ease-in-out',
		display: 'inline-block',
	};

	const isActive = (hash) => {
		return pathname.hash === hash;
	};

	return (
		<li>
			<NavLink to={item.url} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={linkStyles} className={isActive('item.url') ? 'active' : ''}>
				{item.title}
			</NavLink>
		</li>
	);
};
export default NavbarLinks;
