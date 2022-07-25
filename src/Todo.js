import useToggleState from './hooks/useToggleState';
import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import EditTodoForm from './EditTodoForm';

export default function Todo({
	task,
	completed,
	removeTodo,
	toggleTodo,
	updateTodo,
	id,
}) {
	const [isEditing, toggle] = useToggleState(false);

	const listItemStyling = {
		textDecoration: completed ? 'line-through' : 'none',
	};

	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm
					updateTodo={updateTodo}
					id={id}
					task={task}
					toggleEditForm={toggle}
				/>
			) : (
				<>
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
						<IconButton aria-label="Edit" onClick={toggle}>
							<EditIcon />
						</IconButton>
					</ListItemSecondaryAction>
				</>
			)}
		</ListItem>
	);
}
