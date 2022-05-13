import {Role, Tag, UserInfo} from '../../../components/news-page/news-page.types';
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import fetchUserInfo from "./fetchUserInfo.thunk";

const initialState: UserInfo = {
    nickname: '[unknown]',
    firstName: '[unknown]',
    tags: [],
    lastName: '[unknown]',
    role: Role.READER
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserInfo: (state: UserInfo, action: PayloadAction<UserInfo>) => ({...action.payload}),
        addTag: (state: UserInfo, action: PayloadAction<Tag>) => {
            state.tags = [...state.tags, action.payload]
        },
        removeTag: (state: UserInfo, action: PayloadAction<Tag>) => {
            state.tags = state.tags.filter(tag => tag !== action.payload)
        }
    },
    extraReducers: {
        [fetchUserInfo.fulfilled.type]: (state: UserInfo, action: PayloadAction<UserInfo>) =>
            ({...action.payload}),
        [fetchUserInfo.pending.type]: state =>
            ({...state, nickname: 'Loading...', firstName: 'Loading...', lastName: 'Loading...'})
    }
});

export const {setUserInfo, addTag, removeTag} = userSlice.actions;
export default userSlice