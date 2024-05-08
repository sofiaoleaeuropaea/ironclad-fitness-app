const Button = ({ href, onClick, children, className, value }) => {
	const classes = `btn effect  ${className || ''}`;

	const renderButton = () => (
		<button className={classes} onClick={onClick}>
			{children}
		</button>
	);

	const renderLink = () => (
		<a href={href} className={classes}>
			{children}
		</a>
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
