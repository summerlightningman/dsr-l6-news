import {FirstName, LastName, NickName} from "../auth-page/auth-page.types";

export type NewsHeader = string;
export type NewsDescription = string;

export enum Role {
    READER = 'reader',
    WRITER = 'writer',
    ADMIN = 'admin'
}

export type Tag = string;

export interface UserInfo {
    firstName: FirstName,
    lastName: LastName,
    nickname: NickName
    role: Role,
    tags: Tag[]
}

export interface NewsPost {
    authorFirstName: FirstName,
    authorLastName: LastName,
    authorNickname: NickName,
    description: NewsDescription,
    header: NewsHeader,
    tags: Tag[]
}