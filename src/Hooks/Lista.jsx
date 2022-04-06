import { useState } from "react";

export const useLista = (inicialState) => {
	const [lista, setLista] = useState(inicialState);

	const addItem = (newItem) => {
		newItem.id = Date.now();
		setLista([...lista, newItem]);
	};

	const deleteItem = (todoId) => {
		setLista(lista.filter((item) => item.id !== todoId));
	};

	return [lista, addItem, deleteItem];
};
