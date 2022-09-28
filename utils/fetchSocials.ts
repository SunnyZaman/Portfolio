import { Social } from "../typings";

export const fetchSocials = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getSocials`);
    const data = await res.json();
    const socials: Social[] = data.socials;
    return socials;
}