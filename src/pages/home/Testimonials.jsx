import { testimonials } from '../../data';
function Testimonials() {
	return (
		<section id="testimonials" className="testimonials">
			<div className="container">
				<div className="testimonials__wrapper">
					{testimonials.map((item) => (
						<div key={item.id} className="testimonials__card">
							<blockquote>
								<p>"{item.description}"</p>
								<cite>{item.name}</cite>
							</blockquote>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Testimonials;
