import Head from 'next/head';

// Components
import Header from '../Header';

// Styles
import styles from './Container.module.scss';

export default function Container({ children }) {
  return (
    <>
      <Head>
        <title>Comic Book</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"/>
      </Head>
      <Header></Header>
      <main className={styles.mainApp}>
        {children}
      </main>
    </>
  );
}
