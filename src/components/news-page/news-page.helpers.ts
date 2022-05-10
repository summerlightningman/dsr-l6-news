import React from "react";
import {Role, UserInfo} from "./news-page.types";

export const defaultUser: UserInfo = {
    firstName: '',
    lastName: '',
    nickName: '',
    role: Role.READER,
    tags: []
}

export const UserContext = React.createContext<UserInfo>(defaultUser);