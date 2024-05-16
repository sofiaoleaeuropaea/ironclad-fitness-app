import { motion } from 'framer-motion';

const ScrollReveal = ({ children }) => {
	return (
		<div style={{ position: 'relative', overflow: 'hidden' }}>
			<motion.div variants={{ hidden: { opacity: 0, y: 75 }, visible: { opacity: 1, y: 0 } }} initial="hidden" animate="visible" transition={{ duration: 0.5 }}>
				{children}
			</motion.div>
		</div>
	);
};

export default ScrollReveal;
