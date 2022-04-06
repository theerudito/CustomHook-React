import { useLista } from "../Hooks/Lista";

const inicialState = [
	{
		id: 1,
		title: "Learn React"
	},
	{
		id: 2,
		title: "Learn JavaScript"
	}
];

export const TodoApp = () => {
	const [lista, addItem, deleteItem] = useLista(inicialState);
	return (
		<div>
			<h2>Todo App</h2>
			<button onClick={() => addItem({ title: "nueva tarea" })}>Add</button>
			<ul>
				{lista.map((item) => (
					<li key={item.id}>
						{item.title} -{" "}
						<button onClick={() => deleteItem(item.id)}>Delete</button>
					</li>
				))}
			</ul>
		</div>
	);
};
