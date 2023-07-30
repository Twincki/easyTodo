import styles from './App.module.scss';

import TodoForm from './components/TodoForm/TodoForm';
import TodoList from './components/TodoList/TodoList';

function App() {
  return (
    <div className={styles.app}>
      <h1 className={styles.title}>Todo App</h1>
      <div className={styles.form}>
        <TodoForm />
      </div>
      <div className={styles.list}>
        <TodoList />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
