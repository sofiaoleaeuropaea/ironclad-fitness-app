import { Link } from 'react-router-dom';

const Button = ({ href, onClick, children, className, type }) => {
	const btnClasses = `btn ${className || ''} small-text-size `;

	const renderButton = () => (
		<button type={type} className={btnClasses} onClick={onClick}>
			{children}
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={btnClasses}>
			{children}
		</Link>
	);

	const renderComponent = () => {
		if (href) {
			return renderLink();
		} else {
			return renderButton();
		}
	};

	return renderComponent();
};

export default Button;
