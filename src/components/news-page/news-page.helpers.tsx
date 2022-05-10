import React from "react";
import {Role, UserInfo} from "./news-page.types";
import NewsNavbarItem from "./news-navbar/news-navbar-item";
import NavbarEndpoint from "./news-navbar/navbar-endpoint";

export const defaultUser: UserInfo = {
    firstName: '',
    lastName: '',
    nickname: '',
    role: Role.READER,
    tags: []
}

export const getNavbarByRole = (role: Role): JSX.Element => {
    switch (role) {
        case Role.WRITER:
            return <>
                <NewsNavbarItem to={'/' + NavbarEndpoint.SUBSCRIBED} draggable={false}>My subs</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.ALL} draggable={false}>All</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.TAG_LIST} draggable={false}>Tag list</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.NEW_POST} draggable={false}>New post</NewsNavbarItem>
            </>
        case Role.ADMIN:
            return <>
                <NewsNavbarItem to={'/' + NavbarEndpoint.SUBSCRIBED} draggable={false}>My subs</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.ALL} draggable={false}>All</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.TAG_LIST} draggable={false}>Tag list</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.USER_LIST} draggable={false}>User list</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.NEW_POST} draggable={false}>New post</NewsNavbarItem>
            </>
        default:
            return <>
                <NewsNavbarItem to={'/' + NavbarEndpoint.SUBSCRIBED} draggable={false}>My subs</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.ALL} draggable={false}>All</NewsNavbarItem>
                <NewsNavbarItem to={'/' + NavbarEndpoint.TAG_LIST} draggable={false}>Tag list</NewsNavbarItem>
            </>
    }
};

export const getDefaultTabByRole = (role: Role): NavbarEndpoint => {
    switch (role) {
        case Role.READER:
            return NavbarEndpoint.SUBSCRIBED
        default:
            return NavbarEndpoint.ALL
    }
}

export const UserContext = React.createContext<UserInfo>(defaultUser)
