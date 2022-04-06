import { useMemo } from "react";
import { useMousePosition } from "../Hooks/MousePosition";

export const useBackGround = () => {
	const position = useMousePosition();

	const background = useMemo(
		() => (position.x < window.innerWidth / 2 ? "orange" : "red"),
		[position]
	);

	return [background, position];
};
