import { IPhoto } from "./IPhoto";

export interface IAlbum {
    id: number;
    name: string;
    photos: IPhoto[];
}