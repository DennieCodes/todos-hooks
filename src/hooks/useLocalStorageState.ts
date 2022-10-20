import { useState, useEffect } from 'react';
import { TodoType } from '../models';

export default function useLocalStorageState(
	key: string,
	defaultVal: TodoType
) {
	const [state, setState] = useState(() => {
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

	return [state, setState];
}
