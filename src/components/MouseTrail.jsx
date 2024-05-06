import { useEffect, useState } from 'react';
import mouseTrailSVG from './mouseTrailSVG';

export const MouseTrail = () => {
	const svg = mouseTrailSVG;
	const path = svg.querySelector('path');

	const [mousePosition, useMousePosition] = useState({ x: 0, y: 0 });
	useEffect(() => {
		const mouseMoveEvent = (e) => {
			useMousePosition({ x: e.clientX, y: e.clientY });
		};
		window.addEventListener('mousemove', mouseMoveEvent);

		return () => {
			window.removeEventListener('mousemove', mouseMoveEvent);
		};
	}, []);

	// const move = () => {};

	// document.addEventListener('mousemove', move);

	return mousePosition;
};

export default MouseTrail;
