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

	return (
		<form onSubmit={handleSubmit}>
			<TextField
				margin="normal"
				value={value}
				onChange={handleChange}
				fullWidth
			/>
		</form>
	);
}
