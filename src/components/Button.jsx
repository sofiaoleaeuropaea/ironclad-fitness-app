import { Link } from 'react-router-dom';
const Button = ({ href, onClick, children, className, value }) => {
	const classes = `btn effect  ${className || ''}`;

	const renderButton = () => (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);

	const renderLink = () => (
		<Link to={href} className={classes}>
			{children}
		</Link>
	);

	const renderInput = () => <input type="submit" value={value} className={classes} />;

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
