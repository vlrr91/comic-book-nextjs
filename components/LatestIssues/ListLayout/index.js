// Components
import IssueCard from '../../IssueCard';

// Config
import { layoutTypes } from '../../../config';

// Styles
import styles from './ListLayout.module.scss';

export default function ListLayout({ lastIssues }) {
  return (
    <div className={styles.listLayout}>
      {lastIssues.map(issue =>
        <IssueCard issue={issue} layoutType={layoutTypes.list} key={issue.id} />
      )}
    </div>
  )
}
