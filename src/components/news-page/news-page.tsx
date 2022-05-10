import {FC, useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Endpoint from "../../endpoint";
import NewsPageStyled from "./news-page.styled";
import NewsBody from "./news-body.styled";
import NewsNavbarAdmin from "./news-navbar/news-navbar-admin";
import {getUserInfo} from "../../http";
import {defaultUser, UserContext} from "./news-page.helpers";
import {UserInfo} from "./news-page.types";

const NewsPage: FC = () => {
    const navigate = useNavigate();
    const [{token}] = useCookies(['token']);
    const [user, setUser] = useState<UserInfo>(defaultUser)
    useEffect(() => {
        getUserInfo(token).then(setUser);
    }, [token]);

    useEffect(() => {
        if (!token)
            navigate(Endpoint.AUTH);
    }, [token, navigate]);

    console.log(user);

    return <NewsPageStyled>
        <NewsBody>
            <UserContext.Provider value={user}>
                <NewsNavbarAdmin/>
                <Outlet/>
            </UserContext.Provider>
        </NewsBody>
    </NewsPageStyled>
};

export default NewsPage;