import { Divider, List, Paper } from '@mui/material';
import Todo from './Todo';

export default function TodoList({ todos, removeTodo, toggleTodo }) {
	return (
		<Paper>
			<List>
				{todos.map((todo) => {
					return (
						<>
							<Todo
								id={todo.id}
								task={todo.task}
								key={todo.id}
								completed={todo.completed}
								removeTodo={removeTodo}
								toggleTodo={toggleTodo}
							/>
							<Divider />
						</>
					);
				})}
			</List>
		</Paper>
	);
}
