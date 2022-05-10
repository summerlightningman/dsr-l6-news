import {FC, useEffect, useMemo, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Endpoint from "../../endpoint";
import NewsPageStyled from "./news-page.styled";
import NewsBody from "./news-body.styled";

import {getUserInfo} from "../../http";
import {defaultUser, getDefaultTabByRole, getNavbarByRole, UserContext} from "./news-page.helpers";
import {UserInfo} from "./news-page.types";
import NewsNavbar from "./news-navbar/news-navbar";

const NewsPage: FC = () => {
    const navigate = useNavigate();
    const [{token}] = useCookies(['token']);
    const [user, setUser] = useState<UserInfo>(defaultUser);

    const navbar = useMemo(() => getNavbarByRole(user.role), [user.role]);
    const defaultPath = useMemo(() => getDefaultTabByRole(user.role), [user.role]);

    useEffect(() => {
        getUserInfo(token).then(setUser);
    }, [token]);

    useEffect(() => {
        if (!token)
            navigate(Endpoint.AUTH);
    }, [token, navigate]);


    return <NewsPageStyled>
        <NewsBody>
            <UserContext.Provider value={user}>
                <NewsNavbar defaultPath={defaultPath}>
                    {navbar}
                </NewsNavbar>
                <Outlet/>
            </UserContext.Provider>
        </NewsBody>
    </NewsPageStyled>
};

export default NewsPage;