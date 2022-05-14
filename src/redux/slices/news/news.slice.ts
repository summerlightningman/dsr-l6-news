import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsState} from "./news.types";
import {NewsDescription, NewsHeader, NewsPost, Tag} from "../../../components/news-page/news-page.types";
import fetchNewsList from "./fetch-news-list.thunk";
import submitNewPost from "./submit-new-post";

const initialState: NewsState = {
    list: [],
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
        setNewPostHeader: (state: NewsState, action: PayloadAction<NewsHeader>) => {
            state.newPostHeader = action.payload;
        },
        setNewPostDescription: (state: NewsState, action: PayloadAction<NewsDescription>) => {
            state.newPostDescription = action.payload
        },
        setNewPostTags: (state: NewsState, action: PayloadAction<Tag[]>) => {
            state.newPostTags = action.payload
        },
        addNewPostTag: (state: NewsState, action: PayloadAction<Tag>) => {
            if (!state.newPostTags.includes(action.payload))
                state.newPostTags = [...state.newPostTags, action.payload];
        },
        removeNewPostTag: (state: NewsState, action: PayloadAction<Tag>) => {
            state.newPostTags = state.newPostTags.filter(tag => tag !== action.payload);
        },
        setIsDraft: (state: NewsState, action: PayloadAction<boolean>) => {
            state.isDraft = action.payload;
        }
    },
    extraReducers: {
        [fetchNewsList.fulfilled.type]: (state: NewsState, action: PayloadAction<NewsPost[]>) => {
            state.list = action.payload;
        },
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
    setNewPostHeader,
    setNewPostDescription,
    setNewPostTags,
    addNewPostTag,
    removeNewPostTag,
    setIsDraft
} = newsSlice.actions;
export default newsSlice