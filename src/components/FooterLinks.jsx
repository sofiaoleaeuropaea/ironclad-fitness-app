import { NavLink, useLocation } from 'react-router-dom';

const FooterLinks = ({ item }) => {
	const pathname = useLocation();
	const isActive = (hash) => {
		return pathname.hash === hash;
	};
	return (
		<li>
			<NavLink to={item.url} className={`small ${isActive('item.url') ? 'active' : ''}`}>
				{item.title}
			</NavLink>
		</li>
	);
};

export default FooterLinks;
