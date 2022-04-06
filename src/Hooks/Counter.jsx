import { useState } from "react";

export const useCounter = (incialValue) => {
	const [counter, setCounter] = useState(incialValue);

	const increment = () => {
		setCounter(counter + 1);
	};

	const decrement = () => {
		setCounter(counter - 1);
	};

	const reset = () => {
		setCounter(incialValue);
	};

	return [counter, increment, decrement, reset];
};
