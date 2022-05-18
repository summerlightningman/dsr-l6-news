import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BACKEND_URL, corsHeaders} from "../../../http";
import {TagList} from "../../../types/news-post";
import {AddTagRequest} from "./tag.types";

const tagService = createApi({
    reducerPath: 'tagAPI',
    baseQuery: fetchBaseQuery(
        {baseUrl: BACKEND_URL}
    ),
    tagTypes: ['tagList'],
    endpoints: build => ({
        tagList: build.query<TagList, void>({
            query: () => ({
                url: '/news/tags',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json'
                }
            }),
            providesTags: ['tagList']
        }),
        addTag: build.mutation<TagList, AddTagRequest>({
            query: (args) => ({
                url: '/admin/news/tags',
                method: 'PUT',
                headers: {
                    ...corsHeaders,
                    Accept: 'application/json',
                    token: args.token
                },
                body: args.tagList
            }),
            invalidatesTags: ['tagList']
        })
    })
});

export default tagService