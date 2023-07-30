import styles from './TodoList.module.scss';
import Todo from '../Todo/Todo';

function TodoList({ todos }) {
  if (todos.length === 0) {
    return <h2>Todo list is empty</h2>;
  }
  return (
    <ul>
      {todos.map((value) => {
        return <Todo todo={value} />;
      })}
    </ul>
  );
}

export default TodoList;
