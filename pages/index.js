// Components
import Layout from "../components/Container";
import LatestIssues from "../components/LatestIssues";

// Utils
import { getLastIssues } from '../utils';

export default function Home({ lastIssues }) {
  return (
    <Layout>
      <LatestIssues lastIssues={lastIssues} />
    </Layout>
  )
}

export async function getStaticProps() {
  const lastIssues = await getLastIssues();

  return {
    props: { lastIssues },
  }
}
