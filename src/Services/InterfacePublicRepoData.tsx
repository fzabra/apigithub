export interface InterfacePublicRepo {
  id: number;
  name: string;
  full_name: string;
  description: string;
  language:string;
  stargazers_count: number;
  forks_count: number;
  url: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
    repos_url: string;
    html_url: string;
  };
}