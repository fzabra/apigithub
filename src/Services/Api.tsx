import { InterfacePublicRepo } from './InterfacePublicRepoData';
import { ResponseError } from './ResponseError';

const API_URL = 'https://api.github.com/';

// This function fetchData is an asynchronous function that fetches data from the provided URL.
// It takes a single argument:
// - url: a string representing the URL from which to fetch the data
// The function returns a Promise that resolves to the fetched data.
async function fetchData(url: string): Promise<any> {
  try {
    // Send a GET request to the specified URL using the fetch API.
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch repositories');
  }
}


//function to find public repositories
export async function getRepos(query: string): Promise<InterfacePublicRepo[] | ResponseError> {
  const reposFilteredURL = `${API_URL}search/repositories?q=${query}{&page,per_page,sort,order}`;
  try {
    const result = await fetchData(reposFilteredURL);
    return result.items;
  } catch (error) {
    return { message: 'Failed to fetch repositories', error };
  }
}


//function to get repositorie detail
export async function getRepoDetails(ownerLogin: string, repoName: string): Promise<InterfacePublicRepo | null> {
  const repoDetailsURL = `${API_URL}repos/${ownerLogin}/${repoName}`;

  try {
    const repo = await fetchData(repoDetailsURL);
    return repo;
  } catch (error) {
    console.error('Error fetching repository details:', error);
    return null;
  }
}