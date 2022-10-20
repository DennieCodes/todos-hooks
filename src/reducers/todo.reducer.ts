import { v4 as uuidv4 } from 'uuid';
import { ADD, REMOVE, TOGGLE, UPDATE } from '../actions';
import { TodoReducerAction, TodoType } from '../models';

const reducer = (state: TodoType[], action: TodoReducerAction): TodoType[] => {
	switch (action.type) {
		case ADD:
			return [...state, { id: uuidv4(), task: action.task, completed: false }];
		case REMOVE:
			return state.filter((todo: TodoType) => todo.id !== action.id);
		case TOGGLE:
			return state.map((todo: TodoType) =>
				todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
			);
		case UPDATE:
			return state.map((todo: TodoType) =>
				todo.id === action.id ? { ...todo, task: action.newTask } : todo
			);
		default:
			return state;
	}
};

export default reducer;
