import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {User} from "../../../types/user";
import {Token} from "../../../components/auth-page/auth-page.types";
import {corsHeaders} from "../../../http";
import {GetUserInfoResponse} from "./user.types";

const userService = createApi({
    reducerPath: 'userAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/user'}),
    endpoints: build => ({
        getUserInfo: build.query<User, Token>({
            query: token => ({
                url: '/me',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token
                }
            }),
            transformResponse: (resp: GetUserInfoResponse) => resp.me
        })
    })
});

export default userService