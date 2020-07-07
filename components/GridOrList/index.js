import React from 'react';

// Config
import { layoutTypes } from '../../config';

// Styles
import styles from './GridOrList.module.scss';

export default function GridOrList({ title, setLayout, layout }) {
  const listSelectedClass = layout === layoutTypes.list ? styles.active : null;
  const gridSelectedClass = layout === layoutTypes.grid ? styles.active : null;

  return (
    <div className={styles.content}>
      <p className={styles.titleContent}>{title}</p>
      <ul className={styles.selectLayout}>
        <li
          onClick={() => setLayout(layoutTypes.list)}
          className={`${listSelectedClass ? listSelectedClass : ''} ${styles.select}`}>
          <i className="fas fa-list"></i>
          List
        </li>
        <li
          onClick={() => setLayout(layoutTypes.grid)}
          className={`${gridSelectedClass ? gridSelectedClass : ''} ${styles.select}`}>
          <i className="fas fa-border-all"></i>
          Grid
        </li>
      </ul>
    </div>
  );
}
