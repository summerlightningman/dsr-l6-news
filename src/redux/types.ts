import store from "./store";
import {Token} from "../components/auth-page/auth-page.types";

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface RequiresToken {
    token: Token
}