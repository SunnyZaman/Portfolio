export const fetchGitHubRepos = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getGitHubRepos`);
    const data = await res.json();
    const { user } = data;
  const repos = user.starredRepositories.edges
    .map(({ node }: any) => node);
    return repos;
}