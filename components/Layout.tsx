import { ReactElement } from 'react';
import Head from 'next/head';
import NavBar from './NavBar';
import layoutStyles from '../styles/Layout.module.scss';

interface iProps {
  children: ReactElement;
}

export default function Layout({ children }: iProps) {
  return (
    <div className={layoutStyles.container}>
      <Head>
        <title>Bachle Contributor</title>
        <meta name="description" content="Bachle Contributor Application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className={layoutStyles.main}>{children}</main>
      <footer className={layoutStyles.footer}>
        <a href="https://bachle.co" target="_blank" rel="noopener noreferrer">
          Bachle
        </a>
      </footer>
    </div>
  );
}
