
import '@splidejs/splide/css/sea-green';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import { testimonials } from '../../data';

// new Splide('.splide', {
// 	classes: {
// 		page: 'splide__pagination__page costum__color',
// 	},
// });
const options = {
	perPage: 3,
	perMove: 1,
	arrows: false,
	gap: '2rem',

	wheel: true,
	breakpoints: {
		970: { perPage: 2 },
		570: { perPage: 1 },
	},
	classes: {
		page: 'splide__pagination__page is-visible is-active costum__color',
	},
};
const Testimonials = () => {
	return (
		<section id="testimonials" className="testimonials">
			<div className="container">
				<div className="testimonials__wrapper">
					<div className="testimonials__splide">
						<Splide
							options={{
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
							}}
						>
							{testimonials.map((item, index) => (
								<SplideSlide>
									<div key={index} className="testimonials__card">
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
			</div>
		</section>
	);
};

export default Testimonials;
