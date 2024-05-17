import ScrollReveal from './ScrollReveal';

const Heading = ({ title, className, paragraph }) => {
	return (
		<div className="heading">
			<div className="container ">
				<div className="heading__content">
					<ScrollReveal>
						<h2 className={`${className}`}>{title}</h2>
					</ScrollReveal>
					<ScrollReveal>
						<p>{paragraph}</p>
					</ScrollReveal>
				</div>
			</div>
		</div>
	);
};

export default Heading;
