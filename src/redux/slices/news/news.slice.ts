import {NewsState} from "./news.types";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {NewsDescription, NewsHeader} from "../../../components/news-page/news-page.types";

const initialState: NewsState = {
    list: [],
    newPostHeader: '',
    newPostDescription: '',
    offset: 0,
    limit: 5
};

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        setNewPostName: (state: NewsState, action: PayloadAction<NewsHeader>) => {
            state.newPostHeader = action.payload
        },
        setNewDescriptionName: (state: NewsState, action: PayloadAction<NewsDescription>) => {
            state.newPostDescription = action.payload;
        },
        incrementOffset: state => {
            state.offset += state.limit
        },
        decrementOffset: state => {
            if ((state.offset - state.limit) <= 0)
                state.offset = 0;
            else
                state.offset -= state.limit;
        }
    }
});

export const {setNewPostName, setNewDescriptionName, incrementOffset, decrementOffset} = newsSlice.actions;
export default newsSlice