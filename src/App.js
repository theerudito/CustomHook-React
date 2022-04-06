import { CounterApp } from "./Componentes/CounterApp";
import { Mouse } from "./Componentes/MouseApp";
import { TodoApp } from "./Componentes/TodoApp";
import "./styles.css";

export default function App() {
	return (
		<div className="App">
			<h1>Hooks Personalizados</h1>
			<CounterApp />
			<hr />
			<TodoApp />
			<hr />
			<Mouse />
		</div>
	);
}
