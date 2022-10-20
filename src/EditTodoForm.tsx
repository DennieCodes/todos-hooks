import React, { useContext } from 'react';
import { TodosContext } from './context/todos.context';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';
import { EditFormType } from './models';

import { UPDATE } from './actions';

export default function EditTodoForm({
	id,
	task,
	toggleEditForm,
}: EditFormType) {
	const { dispatch } = useContext(TodosContext);
	const [value, handleChange, reset] = useInputState(task);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		dispatch({ type: UPDATE, id: id, newTask: value, task: '' });
		reset();
		toggleEditForm();
	};

	const toggleEdit = () => {
		toggleEditForm();
	};

	return (
		<form
			onSubmit={handleSubmit}
			onBlur={toggleEdit}
			style={{ marginLeft: '1rem', width: '100%' }}
		>
			<TextField
				margin="normal"
				value={value}
				onChange={handleChange}
				fullWidth
				autoFocus
			/>
		</form>
	);
}
