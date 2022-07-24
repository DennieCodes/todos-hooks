export default function TodoList(props) {
	return (
		<ul>
			{props.todos.map((item) => {
				return <li key={item.id}>{item.task}</li>;
			})}
		</ul>
	);
}
