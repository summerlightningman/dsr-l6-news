import {UserID, UserList} from "../../../types/user";

export const getUserIdxByID = (list: UserList, id: UserID) => list.findIndex(user => user.id === id);