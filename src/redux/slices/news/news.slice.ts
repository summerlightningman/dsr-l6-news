import {NewsState} from "./news.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsDescription, NewsHeader, NewsPost} from "../../../components/news-page/news-page.types";

const initialState: NewsState = {
    list: [],
    newPostHeader: '',
    newPostDescription: ''
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNewsList: (state: NewsState, action: PayloadAction<NewsPost[]>) => {
            state.list = action.payload;
        },
        setNewPostName: (state: NewsState, action: PayloadAction<NewsHeader>) => {
            state.newPostHeader = action.payload
        },
        setNewDescriptionName: (state: NewsState, action: PayloadAction<NewsDescription>) => {
            state.newPostDescription = action.payload;
        }
    }
});

export const {setNewsList, setNewPostName, setNewDescriptionName} = newsSlice.actions;
export default newsSlice