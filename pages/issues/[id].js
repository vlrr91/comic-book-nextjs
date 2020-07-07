// Components
import IssueDetail from '../../components/IssueDetail';
import Container from '../../components/Container';

// Utils
import { fetchIssue } from '../../utils';

export default function Issue({ issue }) {
  return (
    <Container>
      <IssueDetail issue={issue} />
    </Container>
  );
}

export async function getServerSideProps(context) {
  const issue = await fetchIssue(context.query.id);

  return {
    props: { issue },
  }
}
