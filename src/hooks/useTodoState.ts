import { v4 as uuidv4 } from 'uuid';
import useLocalStorageState from './useLocalStorageState';
import { TodoType } from '../models';

// 	return { todos, addTodo, removeTodo, updateTodo, toggleTodo };
// TodoType[], (string) => void, (number) => void, (number, string) => void, (number) => void
// Note todos must first be set as correct type in useLocalStorage

export default function useTodoState(initialTodos: TodoType) {
	const [todos, setTodos] = useLocalStorageState('todos', initialTodos);

	const addTodo = (newTodoText: string) => {
		setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
	};

	const removeTodo = (todoId: string) => {
		const updatedTodos = todos.filter((todo: TodoType) => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId: string) => {
		const updatedTodos = todos.map((todo: TodoType) =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
	};

	const updateTodo = (todoId: string, newTask: string) => {
		const updatedTodos = todos.map((todo: TodoType) =>
			todo.id === todoId ? { ...todo, task: newTask } : todo
		);
		setTodos(updatedTodos);
	};

	return { todos, addTodo, removeTodo, updateTodo, toggleTodo };
}
