// Utils
import { fetcher } from './fetcher';

// Config
import { API_KEY } from '../config';

export async function fetchHome() {
  const url = `https://comicvine.gamespot.com/api/issues/?api_key=${API_KEY}&format=json&limit=20`;
  const data = await fetcher(url);

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

  return lastIssues;
}