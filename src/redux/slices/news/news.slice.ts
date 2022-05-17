import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsState} from "./news.types";

import submitNewPost from "./submit-new-post";
import {NewsDescription, NewsHeader, Tag} from "../../../types/news-post";

const initialState: NewsState = {
    offset: 0,
    limit: 5,
    newPostHeader: '',
    newPostDescription: '',
    newPostTags: [],
    isDraft: true
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        incrementOffset: state => {
            state.offset += state.limit
        },
        decrementOffset: state => {
            if ((state.offset - state.limit) <= 0)
                state.offset = 0;
            else
                state.offset -= state.limit;
        },
        setLimit: (state: NewsState, action: PayloadAction<number>) => {
            state.limit = action.payload;
        },
        setNewPostHeader: (state: NewsState, action: PayloadAction<NewsHeader>) => {
            state.newPostHeader = action.payload;
        },
        setNewPostDescription: (state: NewsState, action: PayloadAction<NewsDescription>) => {
            state.newPostDescription = action.payload
        },
        addNewPostTag: (state: NewsState, action: PayloadAction<Tag>) => {
            if (!state.newPostTags.includes(action.payload))
                state.newPostTags = [...state.newPostTags, action.payload];
        },
        removeNewPostTag: (state: NewsState, action: PayloadAction<Tag>) => {
            state.newPostTags = state.newPostTags.filter((tag: Tag) => tag !== action.payload);
        },
        setIsDraft: (state: NewsState, action: PayloadAction<boolean>) => {
            state.isDraft = action.payload;
        }
    },
    extraReducers: {
        [submitNewPost.fulfilled.type]: (state: NewsState) => {
            state.newPostHeader = initialState.newPostHeader;
            state.newPostDescription = initialState.newPostDescription;
            state.newPostTags = initialState.newPostTags;
            state.isDraft = initialState.isDraft;
        }
    }
});

export const {
    incrementOffset,
    decrementOffset,
    setLimit,
    setNewPostHeader,
    setNewPostDescription,
    addNewPostTag,
    removeNewPostTag,
    setIsDraft
} = newsSlice.actions;
export default newsSlice