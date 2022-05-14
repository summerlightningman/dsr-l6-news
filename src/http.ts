import {NewsDescription, NewsHeader, NewsPost, Tag, UserInfo} from "./components/news-page/news-page.types";
import {Login, Password, Token} from "./components/auth-page/auth-page.types";


enum ApiEndpoint {
    LOGIN = 'auth/login',
    SIGN_UP = 'auth/signup',
    LOGOUT = 'auth/logout',
    USER_INFO = 'user/me',
    ALL_NEWS = 'news/all',
    NEWS = 'news',
    TAG_LIST = 'news/tags'
}

const BACKEND_URL = 'http://localhost:3000/';

const corsHeaders = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': BACKEND_URL
};


export const signIn = async (login: Login, password: Password) => fetch(BACKEND_URL + ApiEndpoint.LOGIN, {
    method: 'POST',
    body: JSON.stringify({login, password}),
    headers: {
        ...corsHeaders
    }
}).then(response => response.json());

export const signOut = async (token: Token) => fetch(BACKEND_URL + ApiEndpoint.LOGOUT, {
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

export const getUserInfo = async (token: Token): Promise<UserInfo> => fetch(BACKEND_URL + ApiEndpoint.USER_INFO, {
    method: 'GET',
    headers: {
        ...corsHeaders,
        Accept: 'application/json',
        token
    }
}).then(response => response.json()).then(user => user.me as UserInfo);

export interface QueryParameters {
    offset: number,
    limit: number,
    tags?: string
}

export const getAllNews = async (token: Token, params: QueryParameters) => {
    const queryParameters = Object.entries(params).reduce((acc, [key, val]) => val ? `${acc}&${key}=${val}` : acc, '?').replace('?&', '?');
    return fetch(BACKEND_URL + ApiEndpoint.NEWS + queryParameters, {
        method: 'GET',
        headers: {
            ...corsHeaders,
            Accept: 'application/json',
            token
        }
    })
        .then(response => response.json())
        .then(data => data.news.list as NewsPost[]);
};

export const getTagList = async () => fetch(BACKEND_URL + ApiEndpoint.TAG_LIST)
    .then(response => response.json());

export const setUserData = async (token: Token, newUserInfo: UserInfo) =>
    fetch(BACKEND_URL + ApiEndpoint.USER_INFO, {
        method: 'POST',
        body: JSON.stringify(newUserInfo),
        headers: {
            ...corsHeaders,
            Accept: 'application/json',
            token
        }
    }).then(response => response.json());

export const switchTagSubscription = async (token: Token, tag: Tag) =>
    getUserInfo(token)
        .then(user => {
            const newTagList = user.tags.includes(tag) ? user.tags.filter(_ => _ !== tag) : [...user.tags, tag];
            return setUserData(token, {...user, tags: newTagList})
        });

export interface AddNewsBody {
    header: NewsHeader,
        description: NewsDescription,
    tags: Tag[],
    state: string,
    publicationDate: string
}
export const addNewsPost = async (token: Token, newsData: AddNewsBody) => fetch(BACKEND_URL + ApiEndpoint.NEWS, {
    method: 'POST',
    body: JSON.stringify(newsData),
    headers: {
        ...corsHeaders,
        Accept: 'application/json',
        token
    }
}).then(response => response.json())

