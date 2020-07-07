import fetch from 'isomorphic-fetch';

// Config
import { API_KEY } from '../../config';

// Components
import IssueDetail from '../../components/IssueDetail';
import Container from '../../components/Container';

export default function Issue({ issue }) {
  return (
    <Container>
      <IssueDetail issue={issue} />
    </Container>
  );
}


async function getDataDetails(data) {
  const apiDetailUrl = data.api_detail_url;
  const characterUrl = `${apiDetailUrl}?api_key=${API_KEY}&format=json`;

  const characterResponse = await fetch(characterUrl);
  const characterData = await characterResponse.json();

  const { image } = characterData.results;

  const name = data.name;
  const imageIcon = image.icon_url;

  return { name, imageIcon };
}


Issue.getInitialProps = async ctx => {
  const url = `https://comicvine.gamespot.com/api/issue/4000-${ctx.query.id}/?api_key=${API_KEY}&format=json&limit=20`;
  const response = await fetch(url);
  const data = await response.json();

  const { image, character_credits, team_credits, location_credits } = data.results;

  const characterCredits = await Promise.all(
    character_credits.map(character => getDataDetails(character))
  );

  const locationCredits = await Promise.all(
    location_credits.map(location => getDataDetails(location))
  );

  const teamCredits = await Promise.all(
    team_credits.map(team => getDataDetails(team))
  );

  const issue = {
    image: image.original_url,
    characterCredits,
    teamCredits,
    locationCredits
  }
  return { issue };
}
