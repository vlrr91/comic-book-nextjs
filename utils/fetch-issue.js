// Utils
import { fetcher } from './fetcher';
import { getLastIssues } from './index';

// Config
import { API_KEY } from '../config';

async function getDataDetails(data) {
  const apiDetailUrl = data.api_detail_url;
  const url = `${apiDetailUrl}?api_key=${API_KEY}&format=json`;

  const dataImages = await fetcher(url);

  const { image } = dataImages.results;

  const name = data.name;
  const imageIcon = image.icon_url;

  return { name, imageIcon };
}

export async function getAllIssueIds() {
  const lastIssues = await getLastIssues();

  return lastIssues.map(({ id }) => {
    return {
      params: {
        id: id.toString()
      }
    };
  });
}

export async function getIssue(id) {
  const url = `https://comicvine.gamespot.com/api/issue/4000-${id}/?api_key=${API_KEY}&format=json&limit=20`;
  const data = await fetcher(url);

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
    id,
    image: image.original_url,
    characterCredits,
    teamCredits,
    locationCredits
  }

  return issue;
}
