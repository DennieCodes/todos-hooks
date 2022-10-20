import { useContext } from 'react';
import { TodosContext } from './context/todos.context';
import { Divider, List, Paper } from '@mui/material';
import { TodoType } from './models';
import Todo from './Todo';

export default function TodoList() {
	const { todos } = useContext(TodosContext);

	if (todos.length)
		return (
			<Paper>
				<List>
					{todos.map((todo: TodoType, idx: number) => {
						return (
							<div key={todo.id}>
								<Todo {...todo} />
								{idx < todos.length - 1 && <Divider />}
							</div>
						);
					})}
				</List>
			</Paper>
		);
	return null;
}
