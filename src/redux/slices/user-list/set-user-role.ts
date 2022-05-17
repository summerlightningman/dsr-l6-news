import {createAsyncThunk} from "@reduxjs/toolkit";
import {SetUserRolePayload} from "./user-list.types";

const setUserRole = createAsyncThunk(
    'userList/setUserRole',
    async (payload: SetUserRolePayload, thunkAPI) => {
        const {token, id, role} = payload;

    }
)