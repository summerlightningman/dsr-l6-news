import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {corsHeaders} from "../../../http";
import {User} from "../../../types/user";
import {Token} from "../../../components/auth-page/auth-page.types";
import {SetUserRoleRequest} from "./user-list.types";

const userListService = createApi({
    reducerPath: 'userListAPI',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3000/admin`}),
    tagTypes: ['UserList'],
    endpoints: build => ({
        getUserList: build.query<User[], Token>({
            query: token => ({
                url: '/users',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token
                }
            }),
            providesTags: ['UserList']
        }),
        setUserRole: build.mutation<void, SetUserRoleRequest>({
            query: req => ({
                url: `/user/${req.id}`,
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token: req.token
                },
                body: {role: req.role},
                method: 'PUT'
            }),
            invalidatesTags: ['UserList']
        })
    })
});

export default userListService