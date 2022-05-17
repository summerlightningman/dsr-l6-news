import {createAsyncThunk} from "@reduxjs/toolkit";
import {getUserList} from "../../../http";
import {Token} from "../../../components/auth-page/auth-page.types";

const fetchUserList = createAsyncThunk(
    'userList/getUserList',
    async (token: Token, thunkAPI) => {
        try {
            return await getUserList(token)
        } catch (e) {
            thunkAPI.rejectWithValue('User list fetching error')
        }
    }
);

export default fetchUserList