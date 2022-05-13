import {FC, useEffect, useMemo} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Endpoint from "../../endpoint";
import NewsPageStyled from "./news-page.styled";
import NewsBody from "./news-body.styled";
import {getDefaultTabByRole, getNavbarByRole} from "./news-page.helpers";
import NewsNavbar from "./news-navbar/news-navbar";
import {useAppSelector} from "../../redux/hooks";

const NewsPage: FC = () => {
    const navigate = useNavigate();
    const {role} = useAppSelector(state => state.user);
    const [{token}] = useCookies(['token']);

    const navbar = useMemo(() => getNavbarByRole(role), [role]);
    const defaultPath = useMemo(() => getDefaultTabByRole(role), [role]);


    useEffect(() => {
        if (!token)
            navigate(Endpoint.AUTH);
    }, [token, navigate]);


    return <NewsPageStyled>
        <NewsBody>
            <NewsNavbar defaultPath={defaultPath}>
                {navbar}
            </NewsNavbar>
            <Outlet/>
        </NewsBody>
    </NewsPageStyled>
};

export default NewsPage;