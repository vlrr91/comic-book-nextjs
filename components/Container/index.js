import Head from 'next/head';

// Components
import Header from '../Header';

// Styles
import styles from './Container.module.scss';

export default function Container({ children }) {
  return (
    <>
      <Head>Comic Book</Head>
      <Header></Header>
      <main className={styles.mainApp}>
        {children}
      </main>
    </>
  );
}
