import {Token} from "../../../components/auth-page/auth-page.types";

import {Tag} from "../../../types/news-post";
import {User} from "../../../types/user";

export enum UserError {
    FETCH_ERROR = 'FETCH_ERR',
    SUBSCRIPTION_ERROR = 'SUB_ERR'
}

export interface UserState extends User {
    error?: UserError
}

export interface SwitchSubscriptionPayload {
    token: Token,
    tag: Tag
}