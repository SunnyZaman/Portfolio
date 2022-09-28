import { Skill } from "../typings";

export const fetchSkills = async(hostname:string | undefined)=>{
    const res = await fetch(`https://${hostname}/api/getSkills`);
    const data = await res.json();
    const skills: Skill[] = data.skills;
    return skills;
}