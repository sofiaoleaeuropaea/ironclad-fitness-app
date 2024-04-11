import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLinks = ({ item }) => {
	const [isHovered, setIsHovered] = useState(false);
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
		transform: isHovered ? 'rotate(-20deg)' : 'none',
		transition: 'transform 0.2s ease-in-out',
		display: 'inline-block',
	};

	return (
		<li key={item.id} style={{ visibility: 'visible' }}>
			<NavLink to={item.url} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={linkStyles}>
				{item.title}
			</NavLink>
		</li>
	);
};
export default NavbarLinks;
