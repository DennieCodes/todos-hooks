import { useContext } from 'react';
import { TodosContext } from './context/todos.context';
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

export default function Todo({ id, task, completed }) {
	const { dispatch } = useContext(TodosContext);
	const [isEditing, toggle] = useToggleState(false);

	const listItemStyling = {
		textDecoration: completed ? 'line-through' : 'none',
	};

	return (
		<ListItem style={{ height: '64px' }}>
			{isEditing ? (
				<EditTodoForm id={id} task={task} toggleEditForm={toggle} />
			) : (
				<>
					<Checkbox
						tabIndex={-1}
						checked={completed}
						onClick={() => dispatch({ type: 'TOGGLE', id: id })}
					/>
					<ListItemText style={listItemStyling}>{task}</ListItemText>
					<ListItemSecondaryAction>
						<IconButton
							aria-label="Delete"
							onClick={() => dispatch({ type: 'REMOVE', id: id })}
						>
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
