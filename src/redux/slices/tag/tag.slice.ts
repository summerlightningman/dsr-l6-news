import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {TagError, TagState} from "./tag.types";
import fetchTagList from "./fetch-tag-list";
import {Tag, TagList} from "../../../types/news-post";

const initialState: TagState = {
    list: [],
    isLoading: false,
}

const tagSlice = createSlice({
    name: 'tag',
    initialState,
    reducers: {
        removeTag: (state: TagState, action: PayloadAction<Tag>) => {
            state.list = state.list.filter(tag => tag !== action.payload)
        }
    },
    extraReducers: {
        [fetchTagList.pending.type]: (state: TagState) => {
            state.isLoading = true
        },
        [fetchTagList.fulfilled.type]: (state: TagState, action: PayloadAction<TagList>) => {
            state.isLoading = false;
            state.list = action.payload;
        },
        [fetchTagList.rejected.type]: (state: TagState, action: PayloadAction<TagError>) => {
            state.error = action.payload;
        }
    }
});

export const {removeTag} = tagSlice.actions;
export default tagSlice