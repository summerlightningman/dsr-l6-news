import {FirstName, LastName, NickName} from "./user";

export type NewsHeader = string;
export type NewsDescription = string;
export type Tag = string;
export type PubDate = string;

export type TagList = Tag[];

export enum PubState {
    DRAFT = 'draft',
    PUBLISHED = 'published'
}

export interface NewsPost {
    authorFirstName: FirstName,
    authorLastName: LastName,
    authorNickname: NickName,
    description: NewsDescription,
    header: NewsHeader,
    tags: TagList
}

export interface NewPostInfo extends Pick<NewsPost, 'header' | 'description' | 'tags'> {
    state: PubState,
    publicationDate: PubDate
}