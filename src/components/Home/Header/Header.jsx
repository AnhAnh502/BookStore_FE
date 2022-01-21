import React from 'react';
import styles from './Header.module.css'

export default function Header() {
  return (
    <div>
        <h1 className={`${styles.headerTitle}`}>Header</h1>
    </div>
  );
}
