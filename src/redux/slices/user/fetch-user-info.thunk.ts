import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUser} from '../../../http';
import {Token} from "../../../components/auth-page/auth-page.types";
import {UserError} from "./user.types";

const fetchUser = createAsyncThunk(
    'user/getUser',
    async (token: Token, thunkAPI) => {
        try {
            return await getUser(token)
        } catch (e) {
            return thunkAPI.rejectWithValue(UserError.FETCH_ERROR)
        }
    });

export default fetchUser