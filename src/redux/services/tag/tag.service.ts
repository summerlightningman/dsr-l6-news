import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/dist/query/react";
import {BACKEND_URL, corsHeaders} from "../../../http";
import {TagList} from "../../../types/news-post";

const tagService = createApi({
    reducerPath: 'tagAPI',
    baseQuery: fetchBaseQuery({baseUrl: BACKEND_URL}),
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
        })
    })
});

export default tagService