import styles from './Button.module.scss';

export function Button(props) {
  const { children, onClick } = props;

  return (
    <button onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
