import {FirstName, LastName, NickName} from "../auth-page/auth-page.types";


export enum Role {
    READER,
    WRITER,
    ADMIN
}

export type Tag = string;

export interface UserInfo {
    firstName: FirstName,
    lastName: LastName,
    nickname: NickName
    role: Role,
    tags: Tag[]
}