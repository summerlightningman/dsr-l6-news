import {User} from "../../../types/user";
import {RequiresToken} from "../../types";

export interface GetUserInfoResponse {
    me: User
}

export interface SubscribeToTagRequest extends RequiresToken {
    user: User
}

export interface SubscribeToTagResponse {
    id: number
}