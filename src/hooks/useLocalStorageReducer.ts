import { useReducer, useEffect } from 'react';
import { TodoType, TodoReducerAction } from '../models';

export default function useLocalStorageReducer(
	key: string,
	defaultVal: TodoType[],
	reducer: (state: TodoType[], action: TodoReducerAction) => TodoType[]
): [TodoType[], React.Dispatch<TodoReducerAction>] {
	const [state, dispatch] = useReducer(reducer, defaultVal, () => {
		let val = defaultVal;

		try {
			val = JSON.parse(window.localStorage.getItem(key) || String(defaultVal));
		} catch (e) {
			val = defaultVal;
		}

		return val;
	});

	useEffect(() => {
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, dispatch];
}

// : [TodoType[], React.Dispatch<TodoReducerAction>]
