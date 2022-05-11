import {FirstName, LastName, NickName} from "../auth-page/auth-page.types";

export type Header = string;
export type Description = string;

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
    description: Description,
    header: Header,
    tags: Tag[]
}