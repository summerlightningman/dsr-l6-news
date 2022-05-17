import {createSlice} from "@reduxjs/toolkit";
import {ApplyUserRoleAction, UserListState} from "./user-list.types";
import {getUserIdxByID} from "./user-list.helpers";


const initialState: UserListState = {
    list: []
};

const userListSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        applyUserRole: (state: UserListState, action: ApplyUserRoleAction) => {
            const {id, role} = action.payload;
            const userIdx = getUserIdxByID(state.list, id);
            if (!userIdx)
                return
            state.list[userIdx].role = role;
        }
    }
});

export default userListSlice