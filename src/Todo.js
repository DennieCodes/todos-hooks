import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo({ task, completed, removeTodo, toggleTodo, id }) {
	const listItemStyling = {
		textDecoration: completed ? 'line-through' : 'none',
	};

	return (
		<ListItem>
			<Checkbox
				tabIndex={-1}
				checked={completed}
				onClick={() => toggleTodo(id)}
			/>
			<ListItemText style={listItemStyling}>{task}</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="Edit">
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
