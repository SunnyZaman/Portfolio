import { PageInfo } from "../typings";

export const fetchPageInfo = async(hostname:string | undefined)=>{
    const res = await fetch(`http://${hostname}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;
    return pageInfo;
}