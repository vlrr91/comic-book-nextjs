import fetch from 'isomorphic-fetch';

export async function fetcher(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch(error) {
    console.log(error);
  }
}