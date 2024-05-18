import { Link } from 'react-router-dom';

const Button = ({ href, onClick, children, className, value }) => {
	const btnClasses = `btn ${className || ''} small-text-size `;

	const renderButton = () => (
		<button type="button" className={btnClasses} onClick={onClick}>
			{children}
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={btnClasses}>
			{children}
		</Link>
	);

	const renderInput = () => (
		<div className={btnClasses}>
			<input type="submit" value={value} />
		</div>
	);

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
