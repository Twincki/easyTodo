import styles from './TodoForm.module.scss';

import { Button } from '../Ui/Button/Button'

function TodoForm() {
  return (
    <>
      <form className={styles.form}>
        <input placeholder='Enter new todo' className={styles.input} type="text" />
        <Button>Submit</Button>
      </form>
    </>
  );
}

export default TodoForm;
