import { Project } from "../typings";

export const fetchProjects = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getProjects`);
    const data = await res.json();
    const projects: Project[] = data.projects;
    return projects;
}