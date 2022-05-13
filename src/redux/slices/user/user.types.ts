import {Tag, UserInfo} from '../../../components/news-page/news-page.types';
import {Token} from "../../../components/auth-page/auth-page.types";

export enum UserError {
    FETCH_ERROR = 'FETCH_ERR',
    SUBSCRIPTION_ERROR = 'SUB_ERR'
}

export interface UserState extends UserInfo {
    error?: UserError
}

export interface SwitchSubscriptionPayload {
    token: Token,
    tag: Tag
}