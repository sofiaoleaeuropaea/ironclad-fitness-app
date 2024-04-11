const Buttons = ({ href, onClick, children }) => {
	// const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

	// const spanClasses = `relative z-10`;

	const renderButton = () => (
		<button className="btn effect btn_reverse effect_reverse" onClick={onClick}>
			{children}
		</button>
	);

	const renderLink = () => (
		<a href={href} className="btn effect btn_message">
			{children}
		</a>
	);

	return href ? renderLink() : renderButton();
};

export default Buttons;
