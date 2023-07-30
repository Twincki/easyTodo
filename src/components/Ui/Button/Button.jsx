import styles from './Button.module.scss';

export function Button(props) {
  const { children } = props
  return <button className={styles.button}>{children}</button>;
}


