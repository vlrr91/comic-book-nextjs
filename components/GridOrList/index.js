import React from 'react';

// Config
import { layoutTypes } from '../../config';

// Styles
import styles from './GridOrList.module.scss';

export default function GridOrList({ title, setLayout }) {
  return (
    <div className={styles.content}>
      <p className={styles.titleContent}>{title}</p>
      <ul className={styles.selectLayout}>
        <li onClick={() => setLayout(layoutTypes.list)}>List</li>
        <li onClick={() => setLayout(layoutTypes.grid)}>Grid</li>
      </ul>
    </div>
  );
}
