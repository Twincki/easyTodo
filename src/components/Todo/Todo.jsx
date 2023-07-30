import styles from './Todo.module.scss';

import { RiTodoFill } from 'react-icons/ri'

function Todo({ todo }) {
  return (
    <li className={styles.main}>
      <RiTodoFill className={styles.icon} />
      <span className={styles.text}>{todo}</span>
    </li>
  );
}

export default Todo;
