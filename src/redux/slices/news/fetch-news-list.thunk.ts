import {createAsyncThunk} from "@reduxjs/toolkit";
import {getAllNews} from "../../../http";
import {FetchNewsListPayload} from "./news.types";

const fetchNewsList = createAsyncThunk(
    'news/getNewsList',
    async (payload: FetchNewsListPayload, thunkAPI) => {
        const {token, offset, limit, tags} = payload;
        try {
            return await getAllNews(token, {offset, limit, tags});
        } catch (e) {
            return thunkAPI.rejectWithValue('News getting error')
        }
    });

export default fetchNewsList