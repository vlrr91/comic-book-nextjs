import fetch from 'isomorphic-fetch';

// Components
import Layout from "../components/Container";
import LatestIssues from "../components/LatestIssues";

// Config
import {API_KEY} from '../config';
export default function Home({ lastIssues }) {
  return (
    <Layout>
      <LatestIssues lastIssues={lastIssues} />
    </Layout>
  )
}

Home.getInitialProps = async ctx => {
  const response = await fetch(`https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json&limit=20`);
  const data = await response.json();

  const lastIssues = data.results.map(item => {
    const {
      id,
      volume,
      issue_number,
      image,
      date_added
    } = item;

    return {
      id,
      name: `${volume.name} #${issue_number}`,
      image: image.original_url,
      dateAdded: date_added
    }
  });

  return { lastIssues };
}
