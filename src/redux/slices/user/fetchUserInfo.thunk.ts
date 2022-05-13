import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserInfo} from '../../../http';

const fetchUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async (token: string, thunkAPI) => {
        try {
            return await getUserInfo(token)
        } catch (e) {
            thunkAPI.rejectWithValue('Authorization Error')
        }
    });

export default fetchUserInfo