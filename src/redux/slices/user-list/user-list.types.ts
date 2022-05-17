import {Role, UserID, UserList} from "../../../types/user";
import {PayloadAction} from "@reduxjs/toolkit";
import {Token} from "../../../components/auth-page/auth-page.types";

export interface UserListState {
    list: UserList
}

interface ApplyUserRolePayload {
    id: UserID,
    role: Role
}

export type ApplyUserRoleAction = PayloadAction<ApplyUserRolePayload>;

export interface SetUserRolePayload {
    token: Token,
    id: UserID,
    role: Role
}