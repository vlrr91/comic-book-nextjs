// Components
import IssueCard from '../../IssueCard';

// Config
import { layoutTypes } from '../../../config';

// Styles
import styles from './GridLayout.module.scss';

export default function GridLayout({ lastIssues }) {
  return (
    <div className={styles.gridLayout}>
       {lastIssues.map(issue =>
        <IssueCard
          issue={issue}
          layoutType={layoutTypes.grid}
          key={issue.id} />
      )}
    </div>
  );
}
