import { useContext, memo } from 'react';
import { DispatchContext } from './context/todos.context';
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
import { TodoType } from './models';

function Todo({ id, task, completed }: TodoType) {
	const dispatch = useContext(DispatchContext);
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

export default memo(Todo);
