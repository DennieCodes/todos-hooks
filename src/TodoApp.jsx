import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

export default function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Continue project', completed: false },
		{ id: 2, task: 'Review Grokking coding algorithms', completed: false },
		{ id: 3, task: 'Look at Leetcode problem', completed: false },
	];

	const [todos, setTodos] = useState(initialTodos);
	const addTodo = (newTodoText) => {
		setTodos([...todos, { id: 4, task: newTodoText, completed: false }]);
	};

	return (
		<Paper
			style={{
				padding: 0,
				margin: 0,
				height: '100vh',
				backgroundColor: '#fafafa',
			}}
			elevation={0}
		>
			<AppBar color="primary" position="static" style={{ height: '64px' }}>
				<Toolbar>
					<Typography color="inherit">TODOS WITH HOOKS</Typography>
				</Toolbar>
			</AppBar>
			<TodoForm addTodo={addTodo} />
			<TodoList todos={todos} />
		</Paper>
	);
}
