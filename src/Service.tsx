import axios, { AxiosResponse } from "axios";
interface Iitems {
    items: IEntry[];
}

interface IEntry {
    name: string;
    summary: string;
    url: string;
}


export const getUserEntry = async (nickName: string, page: number) => {
    let result: AxiosResponse = await axios.get<Iitems[]>(`biri/entry/${nickName}/${page}`);
    let items = result.data.items;
    return items;

} 