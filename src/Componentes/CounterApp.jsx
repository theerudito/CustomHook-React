import { useCounter } from "../Hooks/Counter";

export const CounterApp = () => {
	const [counter, increment, decrement, reset] = useCounter(0);
	return (
		<div>
			<h2>Counter click: {counter} </h2>
			<button onClick={increment}>Incrementar</button>
			<button onClick={decrement}>Decrementar</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};
