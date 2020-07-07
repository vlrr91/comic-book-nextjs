// Config
import { layoutTypes } from '../../../config';

// Styles
import styles from './Issue.module.scss';

export default function IssueCard({ issue, layoutType }) {
  const layoutClass = layoutType === layoutTypes.list ? styles.cardList : styles.cardGrid;
  return (
    <article className={`${styles.card} ${layoutClass}`}>
      <img className={styles.cardImage} src={issue.image} alt={issue.name}/>
      <div className={styles.cardInfo}>
        <h4 className={styles.cardTitle}>{issue.name}</h4>
        <p className={styles.cardDate}>{issue.dateAdded}</p>
      </div>
    </article>
  );
}
