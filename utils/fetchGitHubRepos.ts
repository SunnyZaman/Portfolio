export const fetchGitHubRepos = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getGitHubRepos`);
    const d = await res.json();
    const data = d.data;
//   const repos = user.starredRepositories.edges
//     .map(({ node }: any) => node);
    return data;
}