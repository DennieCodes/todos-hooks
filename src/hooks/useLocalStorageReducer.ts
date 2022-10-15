import { useReducer, useEffect } from 'react';
import { TodoType } from '../models';

export default function useLocalStorageReducer(
	key: string,
	defaultVal: TodoType,
	reducer: () => void
) {
	const [state, dispatch] = useReducer(reducer, defaultVal, () => {
		let val;

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
