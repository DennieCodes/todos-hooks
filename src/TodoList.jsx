import { Divider, List, Paper } from '@mui/material';
import Todo from './Todo';

export default function TodoList({
	todos,
	removeTodo,
	toggleTodo,
	updateTodo,
}) {
	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo, idx) => {
						return (
							<div key={todo.id}>
								<Todo
									{...todo}
									removeTodo={removeTodo}
									toggleTodo={toggleTodo}
									updateTodo={updateTodo}
								/>
								{idx < todos.length - 1 && <Divider />}
							</div>
						);
					})}
				</List>
			</Paper>
		);
	return null;
}
