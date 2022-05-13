import {Role, Tag} from '../../../components/news-page/news-page.types';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import fetchUserInfo from "./fetch-user-info.thunk";
import {UserError, UserState} from "./user.types";
import switchTagSub from "./switch-tag-subscription.thunk";

const initialState: UserState = {
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
        [fetchUserInfo.fulfilled.type]: (state: UserState, action: PayloadAction<UserState>) =>
            ({...action.payload}),
        [fetchUserInfo.pending.type]: state =>
            ({...state, nickname: 'Loading...', firstName: 'Loading...', lastName: 'Loading...'}),
        [fetchUserInfo.rejected.type]: (state: UserState, action: PayloadAction<UserError>) =>
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