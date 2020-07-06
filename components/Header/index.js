import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <h1 className={styles.appTitle}>Comic Book</h1>
    </header>
  );
}
