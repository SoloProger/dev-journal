import React from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: JSX.Element[];
}

function MainLayout({ children }: MainLayoutProps) {
  return <main className={styles.layout}>{...children}</main>;
}

export default MainLayout;
