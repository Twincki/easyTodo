import styles from './TodoList.module.scss';

import { RiTodoFill } from 'react-icons/ri'

function TodoList() {
  return (
    <div className={styles.main}>
      <RiTodoFill className={styles.icon} />
      <p className={styles.text}>Test text 123</p>
    </div>
  );
}

export default TodoList;
