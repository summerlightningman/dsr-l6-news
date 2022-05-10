import {FirstName, LastName, NickName} from "../auth-page/auth-page.types";

export interface NewsNavbarItemProps {
    isActive?: boolean
}

export enum Role {
    READER,
    WRITER,
    ADMIN
}

export type Tag = string;

export interface UserInfo {
    firstName: FirstName,
    lastName: LastName,
    nickName: NickName
    role: Role,
    tags: Tag[]
}