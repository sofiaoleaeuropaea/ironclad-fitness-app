import { Link } from 'react-router-dom';
const Button = ({ href, onClick, children, className, value }) => {
	const btnClasses = `btn effect small-text-size ${className || ''}`;

	const renderButton = () => (
		<button className={btnClasses} onClick={onClick}>
			{children}
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={btnClasses}>
			{children}
		</Link>
	);

	const renderInput = () => <input type="submit" value={value} className={btnClasses} />;

	const renderComponent = () => {
		if (href) {
			return renderLink();
		} else if (value) {
			return renderInput();
		} else {
			return renderButton();
		}
	};

	return renderComponent();
};

export default Button;
