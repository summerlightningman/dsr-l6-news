import React from "react";
import {Role, UserInfo} from "./news-page.types";
import NewsNavbarItemStyled from "./news-navbar/news-navbar-item.styled";
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
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.SUBSCRIBED} draggable={false}>My
                    subs</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.ALL} draggable={false}>All</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.TAG_LIST} draggable={false}>Tag
                    list</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.NEW_POST} draggable={false}>New
                    post</NewsNavbarItemStyled>
            </>
        case Role.ADMIN:
            return <>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.SUBSCRIBED} draggable={false}>My
                    subs</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.ALL} draggable={false}>All</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.TAG_LIST} draggable={false}>Tag
                    list</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.USER_LIST} draggable={false}>User
                    list</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.NEW_POST} draggable={false}>New
                    post</NewsNavbarItemStyled>
            </>
        default:
            return <>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.SUBSCRIBED} draggable={false}>My
                    subs</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.ALL} draggable={false}>All</NewsNavbarItemStyled>
                <NewsNavbarItemStyled to={'/' + NavbarEndpoint.TAG_LIST} draggable={false}>Tag
                    list</NewsNavbarItemStyled>
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
