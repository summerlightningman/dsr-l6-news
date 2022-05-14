import {createAsyncThunk} from "@reduxjs/toolkit";
import {AddNewsPostPayload} from "./news.types";
import {AddNewsBody, addNewsPost} from "../../../http";

const submitNewPost = createAsyncThunk(
    'news/createNewsPost',
    async (payload: AddNewsPostPayload, thunkAPI) => {
        const {token, header, isDraft, tags, description} = payload;
        const body: AddNewsBody = {
            header,
            description,
            tags,
            publicationDate: new Date().toUTCString(),
            state: isDraft ? 'draft' : 'published'
        };
        try {
            const result = await addNewsPost(token, body);
            if ('id' in result)
                return thunkAPI.fulfillWithValue('Success')
            return thunkAPI.rejectWithValue('Upload error')
        } catch (e) {
            return thunkAPI.rejectWithValue('Upload error')
        }
    }
);

export default submitNewPost