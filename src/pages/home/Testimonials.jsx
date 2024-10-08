import '@splidejs/splide/css';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { IoMdQuote } from 'react-icons/io';
import { IoIosStar, IoIosStarHalf } from 'react-icons/io';
import ScrollReveal from '../../components/ScrollReveal';

import { testimonials } from '../../data';

const Testimonials = () => {
	const optionsSlideTestimonials = {
		perPage: 3,
		perMove: 1,
		arrows: false,
		gap: '2rem',
		pagination: false,
		wheel: true,
		breakpoints: {
			970: { perPage: 2 },
			650: { perPage: 1 },
		},
	};
	const renderStarRating = (rating, mgRightRize) => {
		const stars = [];
		const fullStars = Math.floor(rating);
		const hasHalfStar = rating % 1 !== 0;

		for (let i = 0; i < fullStars; i++) {
			stars.push(<IoIosStar key={`full-${i}`} style={{ color: '#007e94', marginRight: mgRightRize }} />);
		}

		if (hasHalfStar) {
			stars.push(<IoIosStarHalf key="half" style={{ color: '#007e94', marginRight: mgRightRize }} />);
		}

		const remainingStars = 5 - stars.length;
		for (let i = 0; i < remainingStars; i++) {
			stars.push(<IoIosStar key={`empty-${i}`} style={{ color: '#302f26', marginRight: mgRightRize }} />);
		}

		return stars;
	};

	const Testimonial = () =>
		testimonials.map((testimonial, index) => {
			return (
				<SplideSlide key={index}>
					<div className="testimonials__card">
						<ScrollReveal>
							<blockquote className="testimonial__details">
								<div className="testimonial__details__quote">
									<p>{testimonial.description}</p>
									<IoMdQuote className="quote__icon" />
								</div>
								<div className="testimonial__details__rating">
									<cite>{testimonial.name}</cite>
									<div>{renderStarRating(testimonial.rating, '4px')}</div>
								</div>
							</blockquote>
						</ScrollReveal>
					</div>
				</SplideSlide>
			);
		});
	return (
		<section id="testimonials" className="testimonials">
			<div className="container">
				<ScrollReveal>
					<h2>What people think about our service</h2>
				</ScrollReveal>
				<ScrollReveal>
					<div className="testimonials__wrapper">
						<Splide options={optionsSlideTestimonials}>
							<Testimonial />
						</Splide>
					</div>
				</ScrollReveal>
			</div>
		</section>
	);
};

export default Testimonials;
