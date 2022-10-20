import React, { createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import useLocalStorageReducer from '../hooks/useLocalStorageReducer';
import todoReducer from '../reducers/todo.reducer';

import { TodoType, TodoReducerAction } from '../models';

const defaultTodos: TodoType[] = [
	{
		id: uuidv4(),
		task: 'Complete context portion of course',
		completed: false,
	},
	{ id: uuidv4(), task: 'Split context', completed: false },
];

interface TodosContextType {
	todos: TodoType[];
	dispatch: React.Dispatch<TodoReducerAction>;
}

export const TodosContext = createContext<TodosContextType>(
	{} as TodosContextType
);

export function TodosProvider({ children }: { children: React.ReactNode }) {
	const [todos, dispatch] = useLocalStorageReducer(
		'todos',
		defaultTodos,
		todoReducer
	);

	return (
		<TodosContext.Provider value={{ todos, dispatch }}>
			{children}
		</TodosContext.Provider>
	);
}
