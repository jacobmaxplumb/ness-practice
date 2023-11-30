import axios from "axios";
import { useEffect, useState } from "react";
import { TodoForm } from "./components/TodoForm";
import { TodoList } from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const getTodos = () => {
    axios.get('http://localhost:8080/todos').then(res => setTodos(res.data));
  }

  const addTodo = (title) => {
    const body = {title: title, completed: false};
    axios.post('http://localhost:8080/todos', body).then(res => setTodos([...todos, res.data]));
  }

  const deleteTodo = (id) => {
    axios.delete(`http://localhost:8080/todos/${id}`).then(res => setTodos(todos.filter(todo => todo.id !== id)));
  }

  useEffect(() => {
    getTodos();
  }, [])
  

  return (
    <>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </>
  );
}

export default App;
