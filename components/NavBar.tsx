import React from 'react';
import Link from 'next/link';
import navBarStyles from '../styles/NavBar.module.scss';

export default function NavBar() {
  return (
    <nav className={navBarStyles.body}>
      <Link href="/">
        <span className={navBarStyles.title}>Bachle Contributor</span>
      </Link>
      <ul>
        <Link href="/sign-in">Sign In</Link>
        <Link href="/register">Register</Link>
      </ul>
    </nav>
  );
}
