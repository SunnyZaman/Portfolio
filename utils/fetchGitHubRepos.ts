export const fetchGitHubRepos = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getGitHubRepos`);
    const result = await res.json();
    const repos = result.github.data.user.starredRepositories.edges.map(({ node }: any) => node);
    return repos;
}