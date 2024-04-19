const Heading = ({ title, className, paragraph }) => {
	return (
		<div className={`heading ${className}`}>
			<div className="container ">
				<div className="heading__content">
					<h2>{title}</h2>
					<p>{paragraph}</p>
				</div>
			</div>
		</div>
	);
};

export default Heading;
