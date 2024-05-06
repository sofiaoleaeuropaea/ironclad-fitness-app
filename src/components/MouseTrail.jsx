import { useEffect, useState } from "react";

const MouseTrail = () => {
    const [mousePosition, useMousePosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
			const setFromEvent = (e) => useMousePosition({ x: e.clientX, y: e.clientY });
			window.addEventListener('mousemove', setFromEvent);

			return () => {
				window.removeEventListener('mousemove', setFromEvent);
			};
		}, []);
    const svg = document.querySelector("svg.trail")
    const path = document.querySelector("path")

    const points = []

  return (
      <svg className='trail' viewBox='0 0 400 400'>
          <path d='M 100 100 L 200 200 L 300 100'/>  
    </svg>
  )
}

export default MouseTrail
