import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import React, { useContext } from 'react';
import { DispatchContext } from './context/todos.context';
import { ADD } from './actions';

export default function TodoForm() {
	const [value, handleChange, reset] = useInputState('');
	const dispatch = useContext(DispatchContext);

	const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({ type: ADD, task: value });
		reset();
	};

	return (
		<Paper style={{ margin: '1rem 0', padding: '1rem', width: '30em' }}>
			<form onSubmit={handleSubmit}>
				<TextField
					value={value}
					onChange={handleChange}
					margin="normal"
					label="Add New Todo"
					fullWidth
				/>
			</form>
		</Paper>
	);
}
