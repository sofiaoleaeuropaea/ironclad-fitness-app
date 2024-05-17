import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';
const Accordion = ({ handleToggle, index, accordionOpen, title, content }) => {
	const contentEl = useRef(null);

	return (
		<div className="accordion">
			<ScrollReveal>
				<button className="accordion__heading" onClick={() => handleToggle(index)}>
					<span className={`accordion__heading__title ${accordionOpen === index ? 'active' : ''}`}>{title}</span>
					<div className={`accordion__heading__arrow ${accordionOpen === index ? 'active' : ''}`}>
						<span className="bar"></span>
						<span className="bar"></span>
					</div>
				</button>
			</ScrollReveal>

			<div ref={contentEl} className={`accordion__content ${accordionOpen === index ? 'active' : ''}`} style={accordionOpen === index ? { height: contentEl.current.scrollHeight } : { height: '0px' }}>
				<ul>{content}</ul>
			</div>
		</div>
	);
};

export default Accordion;
