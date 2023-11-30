export const TodoList = (props) => {
	return (
		<>
			{props.todos.map((todo) => (
                <div onClick={() => props.deleteTodo(todo.id)} key={todo.id}>{todo.title}</div>
            ))}
		</>
	);
};
