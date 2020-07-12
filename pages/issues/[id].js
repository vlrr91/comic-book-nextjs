// Components
import IssueDetail from '../../components/IssueDetail';
import Container from '../../components/Container';

// Utils
import { getIssue, getAllIssueIds } from '../../utils';

export default function Issue({ issue }) {
  return (
    <Container>
      <IssueDetail issue={issue} />
    </Container>
  );
}

export async function getStaticPaths() {
  const paths = await getAllIssueIds();

  return {
    paths,
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const issue = await getIssue(params.id);

  return {
    props: { issue },
  }
}
