import styles from './App.module.scss';
import { useState } from "react";

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList'

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function onChangeTodo(event) {
    setTodo(event.target.value)
  }

  function addTodo(event) {
    event.preventDefault()
    if (todo !== "") {
      setTodos([...todos, todo])
      setTodo("")
    }

  }

  console.log(todos)
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.form}>
        <TodoForm addTodo={addTodo} todo={todo} onChangeTodo={onChangeTodo} />
      </div>
      <div className={styles.list}>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;
