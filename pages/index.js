// Components
import Layout from "../components/Container";
import LatestIssues from "../components/LatestIssues";

// Utils
import { fetchHome } from '../utils';

export default function Home({ lastIssues }) {
  return (
    <Layout>
      <LatestIssues lastIssues={lastIssues} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  const lastIssues = await fetchHome();

  return {
    props: { lastIssues },
  }
}
