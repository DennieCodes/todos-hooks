import { createContext, useReducer } from 'react';
import todoReducer from '../reducers/todo.reducer';
// import useTodoState from '../hooks/useTodoState';

const defaultTodos = [
	{ id: 1, task: 'Refactor context to reducer', completed: false },
	{ id: 2, task: 'Split context', completed: false },
];

export const TodosContext = createContext();

export function TodosProvider(props) {
	const [todos, dispatch] = useReducer(todoReducer, defaultTodos);

	// const todosAll = useTodoState(defaultTodos);

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{props.children}
		</TodosContext.Provider>
	);
}
