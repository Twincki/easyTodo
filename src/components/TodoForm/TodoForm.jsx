import styles from './TodoForm.module.scss';

import { Button } from '../Ui/Button/Button';

function TodoForm(props) {
  const { todo, addTodo, onChangeTodo } = props;

  return (
    <form onSubmit={addTodo} className={styles.form}>
      <input
        type="text"
        value={todo}
        className={styles.input}
        onChange={onChangeTodo}
        placeholder="Enter new todo"
      />
      <Button>Submit</Button>
    </form>
  );
}

export default TodoForm;
