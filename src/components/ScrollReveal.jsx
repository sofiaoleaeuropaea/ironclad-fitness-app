import { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const ScrollReveal = ({ children }) => {
	const scrollRef = useRef(null);
	const isInView = useInView(scrollRef, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			mainControls.start('visible');
		}
	}, [isInView]);
	return (
		<div ref={scrollRef}>
			<motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate={mainControls} transition={{ duration: 0.5 }}>
				{children}
			</motion.div>
		</div>
	);
};

export default ScrollReveal;
