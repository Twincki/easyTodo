import styles from './App.module.scss';
import { useState } from 'react';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  const [todo, setTodo] = useState('');
  const [todos, setTodos] = useState([]);

  function onChangeTodo(event) {
    setTodo(event.target.value);
  }

  function addTodo(event) {
    event.preventDefault();

    if (todo.trim().length !== 0) {
      setTodos([...todos, todo]);
      setTodo('');
    }
  }

  function onTodoDelete(i) {
    setTodos(todos.filter((_, index) => index !== i));
  }

  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.form}>
        <TodoForm addTodo={addTodo} todo={todo} onChangeTodo={onChangeTodo} />
      </div>
      <TodoList onTodoDelete={onTodoDelete} todos={todos} />
    </div>
  );
}

export default App;
