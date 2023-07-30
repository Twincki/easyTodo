import styles from './TodoForm.module.scss';

import { Button } from '../Ui/Button/Button';

// 1. Создание всех компонентов.
// 2. Добавление задач в список при нажатии кнопки Submit

// 3. При отсутствии задач выводить отдельный компонент сообщающий об этом.

// 4. При двойном клике на задачу, удалять ее. Позже сделать для этого отдельную кнопку.

// отключить перезагрузку страницы, обработать тодо когда оно пустое что бы оно не добавлялось когда пустое, перенести всю строчку с тодомап в новый компонент в туду лист он должен принимать один пропс тудус

function TodoForm(props) {
  const { todo, addTodo, onChangeTodo } = props;

  return (
    <>
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
    </>
  );
}

export default TodoForm;
