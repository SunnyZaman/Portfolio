import { Experience } from "../typings";

export const fetchExperiences = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getExperience`);
    const data = await res.json();
    const experiences: Experience[] = data.experiences;
    return experiences;
}