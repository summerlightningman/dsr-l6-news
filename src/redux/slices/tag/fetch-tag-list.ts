import {createAsyncThunk} from "@reduxjs/toolkit";
import {getTagList} from "../../../http";
import {TagError} from "./tag.types";

const fetchTagList = createAsyncThunk(
    'tag/getTagList',
    async (_, thunkAPI) => {
        try {
            return await getTagList()
        } catch (e) {
            return thunkAPI.rejectWithValue(TagError.LOAD_ERROR)
        }
    });

export default fetchTagList