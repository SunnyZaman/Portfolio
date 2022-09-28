import { Experience } from "../typings";

export const fetchGitHubRepos = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getGitHubRepos`);
    const data = await res.json();
    const repos: Experience[] = data.user.starredRepositories.edges
    .map(({ node }: any) => node);
    return repos;
}