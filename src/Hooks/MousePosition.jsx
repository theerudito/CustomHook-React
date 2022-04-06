import { useState, useEffect } from "react";

const inicialPosition = { x: null, y: null };

export const useMousePosition = () => {
	const [position, setPosition] = useState(inicialPosition);

	useEffect(() => {
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			setPosition({
				x: clientX,
				y: clientY
			});
		};
		window.addEventListener("mousemove", handleMouseMove);

		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);
	return position;
};
