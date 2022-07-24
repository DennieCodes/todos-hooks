import { Paper, TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

export default function TodoForm({ addTodo }) {
	const [value, handleChange, reset] = useInputState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		addTodo(value);
		reset();
	};

	return (
		<Paper>
			<form onSubmit={handleSubmit}>
				<TextField value={value} onChange={handleChange} />
			</form>
		</Paper>
	);
}
