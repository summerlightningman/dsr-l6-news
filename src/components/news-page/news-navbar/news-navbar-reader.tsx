import {FC, useEffect} from 'react';
import NewsNavbarItem from "./news-navbar-item";
import NavbarEndpoint from "./navbar-endpoint";
import UserInfo from "../user-info/user-info";
import NewsNavbar from "./news-navbar.styled";
import {useNavigate, useParams} from "react-router-dom";

const NewsNavbarReader: FC = () => {
    const {section} = useParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (!section)
            navigate(NavbarEndpoint.SUBSCRIBED)
    }, [section, navigate])

    return <NewsNavbar>
        <NewsNavbarItem to={'/' + NavbarEndpoint.SUBSCRIBED} isActive={section === NavbarEndpoint.SUBSCRIBED}>My subs</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.ALL} isActive={section === NavbarEndpoint.ALL}>All</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.TAG_LIST} isActive={section === NavbarEndpoint.TAG_LIST}>Tag list</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.NEW_POST} isActive={section === NavbarEndpoint.NEW_POST}>New post</NewsNavbarItem>
        <UserInfo/>
    </NewsNavbar>
};

export default NewsNavbarReader;