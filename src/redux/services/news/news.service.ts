import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {corsHeaders} from "../../../http";
import {NewsPost} from "../../../types/news-post";
import {GetAllNewsListParams, GetNewsListResponse, GetSubNewsListParams} from "./news.types";

const newsService = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3000/news`}),
    tagTypes: ['AllNewsList', 'SubNewsList'],
    endpoints: build => ({
        getAllNewsList: build.query<NewsPost[], GetAllNewsListParams>({
            query: args => ({
                url: '/',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token: args.token
                },
                params: {offset: args.offset, limit: args.limit}
            }),
            transformResponse: (resp: GetNewsListResponse) => resp.news.list,
            providesTags: ['AllNewsList']
        }),
        getSubNewsList: build.query<NewsPost[], GetSubNewsListParams>({
            query: args => ({
                url: '/',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token: args.token
                },
                params: {offset: args.offset, limit: args.limit, tags: args.tags.join(',')}
            }),
            transformResponse: (resp: GetNewsListResponse) => resp.news.list,
            providesTags: ['SubNewsList']
        })
    })

});

export default newsService