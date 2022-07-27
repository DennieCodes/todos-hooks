import { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

const defaultTodos = [{ id: 1, task: 'Add in context', completed: false }];

export const TodosContext = createContext();

export function TodosProvider(props) {
	const todosAll = useTodoState(defaultTodos);

	return (
		<TodosContext.Provider value={todosAll}>
			{props.children}
		</TodosContext.Provider>
	);
}
