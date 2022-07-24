import { Divider, List, Paper } from '@mui/material';
import Todo from './Todo';

export default function TodoList(props) {
	return (
		<Paper>
			<List>
				{props.todos.map((todo) => {
					return (
						<>
							<Todo
								task={todo.task}
								key={todo.key}
								completed={todo.completed}
							/>
							<Divider />
						</>
					);
				})}
			</List>
		</Paper>
	);
}
