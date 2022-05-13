import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserInfo} from '../../../http';
import {Token} from "../../../components/auth-page/auth-page.types";
import {UserError} from "./user.types";

const fetchUserInfo = createAsyncThunk(
    'user/getUserInfo',
    async (token: Token, thunkAPI) => {
        try {
            return await getUserInfo(token)
        } catch (e) {
            thunkAPI.rejectWithValue(UserError.FETCH_ERROR)
        }
    });

export default fetchUserInfo