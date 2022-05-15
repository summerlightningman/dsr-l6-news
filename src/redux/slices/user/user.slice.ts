import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import fetchUser from "./fetch-user-info.thunk";
import switchTagSub from "./switch-tag-subscription.thunk";
import {UserError, UserState} from "./user.types";
import {Role} from "../../../types/user";
import {Tag} from "../../../types/news-post";

const initialState: UserState = {
    id: -1,
    nickname: '[unknown]',
    firstName: '[unknown]',
    tags: [],
    lastName: '[unknown]',
    role: Role.READER
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [fetchUser.fulfilled.type]: (state: UserState, action: PayloadAction<UserState>) =>
            ({...action.payload}),
        [fetchUser.pending.type]: state =>
            ({...state, nickname: 'Loading...', firstName: 'Loading...', lastName: 'Loading...'}),
        [fetchUser.rejected.type]: (state: UserState, action: PayloadAction<UserError>) =>
            ({...state, error: action.payload}),
        [switchTagSub.fulfilled.type]: (state: UserState, action: PayloadAction<Tag>) => {
            if (state.tags.includes(action.payload))
                state.tags = state.tags.filter(tag => tag !== action.payload)
            else
                state.tags = [...state.tags, action.payload]
        },
        [switchTagSub.rejected.type]: (state: UserState, action: PayloadAction<UserError>) =>
            ({...state, error: action.payload})
    }
});

export default userSlice