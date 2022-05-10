import {UserInfo} from "./components/news-page/news-page.types";
import {Login, Password} from "./components/auth-page/auth-page.types";

enum ApiEndpoint {
    LOGIN = 'auth/login',
    SIGN_UP = 'auth/signup',
    LOGOUT = 'auth/logout',
    USER_INFO = 'user/me'
}

const BACKEND_URL = 'http://localhost:3000/';

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BACKEND_URL
}

export const signIn = async (login: Login, password: Password) => fetch(BACKEND_URL + ApiEndpoint.LOGIN, {
    method: 'POST',
    body: JSON.stringify({login, password}),
    headers: {
        ...corsHeaders
    }
}).then(response => response.json());

export const signOut = async (token: string) => fetch(BACKEND_URL + ApiEndpoint.LOGOUT, {
    method: 'POST',
    headers: {
        ...corsHeaders,
        token
    }
});

export const signUp = async (login: Login, password: Password) => fetch(BACKEND_URL + ApiEndpoint.SIGN_UP, {
    method: 'PUT',
    body: JSON.stringify({login, password}),
    headers: {
        ...corsHeaders
    }
});

export const getUserInfo = async (token: string): Promise<UserInfo> => fetch(BACKEND_URL + ApiEndpoint.USER_INFO, {
    method: 'GET',
    headers: {
        ...corsHeaders,
        Accept: 'application/json',
        token
    }
}).then(response => response.json()).then(user => user.me as UserInfo);

