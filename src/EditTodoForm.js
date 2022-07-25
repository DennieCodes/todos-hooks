import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function EditTodoForm({ updateTodo, id, task, toggleEditForm }) {
	const [value, handleChange, reset] = useInputState(task);

	const handleSubmit = (e) => {
		e.preventDefault();
		updateTodo(id, value);
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
