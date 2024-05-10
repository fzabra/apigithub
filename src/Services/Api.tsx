import { InterfacePublicRepo } from './InterfacePublicRepoData';
import { ResponseError } from './ResponseError';

const API_URL = 'https://api.github.com/';


async function fetchData(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    return response.json();
  } catch (error) {
    throw new Error('Failed to fetch repositories');
  }
}

export async function getRepos(query: string): Promise<InterfacePublicRepo[] | ResponseError> {
  const reposFilteredURL = `${API_URL}search/repositories?q=${query}{&page,per_page,sort,order}`;
  try {
    const result = await fetchData(reposFilteredURL);
    console.log("result", result)
    return result.items;
  } catch (error) {
    return { message: 'Failed to fetch repositories', error };
  }
}



export async function getRepoDetails(ownerLogin: string, repoName: string): Promise<InterfacePublicRepo | null> {
  const repoDetailsURL = `${API_URL}repos/${ownerLogin}/${repoName}`;

  try {
    const repo = await fetchData(repoDetailsURL);
    console.log("repo", repo)
    return repo;
  } catch (error) {
    console.error('Erro ao buscar detalhes do repositório:', error);
    return null;
  }
}