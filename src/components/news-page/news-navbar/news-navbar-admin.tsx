import {FC} from 'react';
import NewsNavbarItem from "./news-navbar-item";
import NewsNavbar from "./news-navbar.styled";
import UserInfo from "../user-info/user-info";
import NavbarEndpoint from "./navbar-endpoint";

const NewsNavbarAdmin: FC = () => {
    const path = window.location.pathname.replace('/', '');

    // useEffect(() => {
    //     if (!section)
    //         navigate(NavbarEndpoint.ALL, {replace: false});
    // }, [section, navigate]);

    return <NewsNavbar>
        <NewsNavbarItem to={'/' + NavbarEndpoint.SUBSCRIBED}
                        isActive={path === NavbarEndpoint.SUBSCRIBED}>Subs</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.ALL} isActive={path === NavbarEndpoint.ALL}>All</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.TAG_LIST} isActive={path === NavbarEndpoint.TAG_LIST}>Tag
            list</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.USER_LIST} isActive={path === NavbarEndpoint.USER_LIST}>User
            list</NewsNavbarItem>
        <NewsNavbarItem to={'/' + NavbarEndpoint.NEW_POST} isActive={path === NavbarEndpoint.NEW_POST}>New
            post</NewsNavbarItem>
        <UserInfo/>
    </NewsNavbar>
};

export default NewsNavbarAdmin;