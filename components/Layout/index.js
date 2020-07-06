import Head from 'next/head';
import Header from '../Header';

export default function Layout({ children }) {
  return (
    <>
      <Head>Comic Book</Head>
      <Header></Header>
      <main>
        {children}
      </main>
    </>
  );
}
