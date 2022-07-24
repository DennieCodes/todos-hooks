import {
	Checkbox,
	IconButton,
	ListItem,
	ListItemSecondaryAction,
	ListItemText,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

export default function Todo({ task, completed }) {
	const listItemStyling = {
		textDecoration: completed ? 'line-through' : 'none',
	};

	return (
		<ListItem>
			<Checkbox tabIndex={-1} checked={completed} />
			<ListItemText style={listItemStyling}>{task}</ListItemText>
			<ListItemSecondaryAction>
				<IconButton aria-label="Delete">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="Edit">
					<EditIcon />
				</IconButton>
			</ListItemSecondaryAction>
		</ListItem>
	);
}
