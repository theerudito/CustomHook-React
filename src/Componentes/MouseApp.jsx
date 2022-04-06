import React from "react";
import { useBackGround } from "./Backgrounf";

export const Mouse = () => {
	// cuando es un arreglo de varias posiciones va asi
	const [background, position] = useBackGround();
	//cuando solo necesitamos una posicion de un arreglo definimos as
	// const {position} = useBackGround();

	// los arreglos podemos cambiar el nombre no como los objetos q debemos poner un alias

	return (
		<div
			style={{
				background,
				width: "150px",
				height: "110px",
				margin: "auto",
				borderRadius: "10px",
				border: "solid 1px purple"
			}}>
			<h4>Mouse</h4>
			<pre>{JSON.stringify(position, null, 2)}</pre>
		</div>
	);
};
