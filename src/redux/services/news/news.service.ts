import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {corsHeaders} from "../../../http";
import {NewsPost} from "../../../types/news-post";
import {GetAllNewsListRequest, GetNewsListResponse, GetSubNewsListRequest} from "./news.types";

const newsService = createApi({
    reducerPath: 'newsAPI',
    baseQuery: fetchBaseQuery({baseUrl: `http://localhost:3000/news`}),
    tagTypes: ['AllNewsList', 'SubNewsList'],
    endpoints: build => ({
        getAllNewsList: build.query<NewsPost[], GetAllNewsListRequest>({
            query: req => ({
                url: '/',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token: req.token
                },
                params: {...req.params}
            }),
            transformResponse: (resp: GetNewsListResponse) => resp.news.list,
            providesTags: ['AllNewsList']
        }),
        getSubNewsList: build.query<NewsPost[], GetSubNewsListRequest>({
            query: req => ({
                url: '/',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token: req.token
                },
                params: {...req.params, tags: req.params.tags.join(',')}
            }),
            transformResponse: (resp: GetNewsListResponse) => resp.news.list,
            providesTags: ['SubNewsList']
        })
    })

});

export default newsService