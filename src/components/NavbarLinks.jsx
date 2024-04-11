import React from 'react';

const NavbarLinks = (item) => {
	const [btnHovered, setBtnHovered] = useState(false);
	const handleMouseEnter = () => {
		setBtnHovered(true);
	};

	const handleMouseLeave = () => {
		setBtnHovered(false);
	};
	const textTransform = {
		transform: btnHovered ? 'rotateY(20deg)' : 'none',
		transition: 'transform 0.2s ease-in-out',
	};
	return (
		<div>
			<li key={item.id}>
				<NavLink to={item.url} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={textTransform}>
					{item.title}
				</NavLink>
			</li>
		</div>
	);
};

export default NavbarLinks;
