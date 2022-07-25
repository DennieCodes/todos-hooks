import { useState } from 'react';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

import { v4 as uuidv4 } from 'uuid';

export default function TodoApp() {
	const initialTodos = [
		{ id: 1, task: 'Continue project', completed: true },
		{ id: 2, task: 'Review Grokking coding algorithms', completed: false },
		{ id: 3, task: 'Look at Leetcode problem', completed: false },
	];

	const [todos, setTodos] = useState(initialTodos);

	const addTodo = (newTodoText) => {
		setTodos([...todos, { id: uuidv4(), task: newTodoText, completed: false }]);
	};

	const removeTodo = (todoId) => {
		const updatedTodos = todos.filter((todo) => todo.id !== todoId);
		setTodos(updatedTodos);
	};

	const toggleTodo = (todoId) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
		setTodos(updatedTodos);
	};

	const updateTodo = (todoId, newTask) => {
		const updatedTodos = todos.map((todo) =>
			todo.id === todoId ? { ...todo, task: newTask } : todo
		);
		setTodos(updatedTodos);
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
			<Grid
				container
				alignItems="center"
				direction="column"
				style={{ marginTop: '1 rem' }}
			>
				<Grid item xs={11} md={8} lg={4}>
					<TodoForm addTodo={addTodo} />
					<TodoList
						todos={todos}
						removeTodo={removeTodo}
						toggleTodo={toggleTodo}
						updateTodo={updateTodo}
					/>
				</Grid>
			</Grid>
		</Paper>
	);
}
