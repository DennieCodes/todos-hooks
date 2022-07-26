import { useState, useEffect } from 'react';

export default function useLocalStorageState(key, defaultVal) {
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
		console.log('State:', state);
		window.localStorage.setItem(key, JSON.stringify(state));
	}, [key, state]);

	return [state, setState];
}
