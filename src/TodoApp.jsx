import useTodoState from './hooks/useTodoState';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Grid from '@mui/material/Grid';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { TodosProvider } from './context/todos.context';

export default function TodoApp() {
	const initialTodos = [{ id: 1, task: 'Add a new todo', completed: false }];
	const { todos, addTodo, removeTodo, toggleTodo, updateTodo } =
		useTodoState(initialTodos);

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
					<TodosProvider>
						<TodoForm addTodo={addTodo} />
						<TodoList
							todos={todos}
							removeTodo={removeTodo}
							toggleTodo={toggleTodo}
							updateTodo={updateTodo}
						/>
					</TodosProvider>
				</Grid>
			</Grid>
		</Paper>
	);
}
