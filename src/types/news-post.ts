import {FirstName, LastName, NickName} from "./user";

export type NewsHeader = string;
export type NewsDescription = string;
export type Tag = string;

export type TagList = Tag[];

export interface NewsPost {
    authorFirstName: FirstName,
    authorLastName: LastName,
    authorNickname: NickName,
    description: NewsDescription,
    header: NewsHeader,
    tags: TagList
}