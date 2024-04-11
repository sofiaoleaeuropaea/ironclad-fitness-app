const Buttons = ({ href, onClick, children, className }) => {
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

	return href ? renderLink() : renderButton();
};

export default Buttons;
