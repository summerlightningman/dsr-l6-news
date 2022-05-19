import {TagList} from "./news-post";


export type FirstName = string;
export type LastName = string;
export type NickName = string
export type UserID = number;

export enum Role {
    READER = 'reader',
    WRITER = 'writer',
    ADMIN = 'admin'
}

export interface User {
    id?: UserID,
    firstName: FirstName,
    lastName: LastName,
    nickname: NickName
    role: Role,
    tags: TagList,
}

export type UserList = User[];