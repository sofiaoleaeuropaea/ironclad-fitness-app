import '@splidejs/splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { testimonials } from '../../data';

const Testimonials = () => {
	const options = {
		perPage: 3,
		perMove: 1,
		arrows: false,
		gap: '2rem',
		
		wheel: true,
		breakpoints: {
			970: { perPage: 2 },
			650: { perPage: 1 },
		},
		classes: {
			page: 'splide__pagination__page is-visible is-active costum__color',
		},
	};
	return (
		<section id="testimonials" className="testimonials">
			<div className="container">
				<div className="testimonials__wrapper">
					<Splide options={options}>
						{testimonials.map((item, index) => (
							<SplideSlide key={index}>
								<div className="testimonials__card">
									<blockquote>
										<p>"{item.description}"</p>
										<cite>{item.name}</cite>
									</blockquote>
								</div>
							</SplideSlide>
						))}
					</Splide>
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
