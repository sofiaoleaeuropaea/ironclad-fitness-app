const Heading = ({ title, className, paragraph }) => {
	return (
		<div className="heading">
			<div className="container ">
				<div className="heading__content">
					<h2 className={`${className}`}>{title}</h2>
					<p>{paragraph}</p>
				</div>
			</div>
		</div>
	);
};

export default Heading;
