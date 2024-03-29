import Todo from '../Todo/Todo';

import styles from './TodoList.module.scss';

function TodoList({ todos, onTodoDelete }) {
  if (todos.length === 0) {
    return <h2>Todo list is empty</h2>;
  }
  return (
    <ul className={styles.main}>
      {todos.map((value, index) => {
        return (
          <Todo
            onTodoDelete={() => onTodoDelete(index)}
            key={index}
            todo={value}
          />
        );
      })}
    </ul>
  );
}

export default TodoList;
