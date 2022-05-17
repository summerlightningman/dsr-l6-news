import {FC, useEffect, useMemo, useRef} from 'react';
import {Outlet, useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Endpoint from "../../endpoint";
import NewsPageStyled from "./news-page.styled";
import NewsBody from "./news-body.styled";
import {getDefaultTabByRole, getNavbarByRole} from "./news-page.helpers";
import NewsNavbar from "./news-navbar/news-navbar";
import {Role} from "../../types/user";
import {useAppDispatch} from "../../redux/hooks";
import {setLimit} from "../../redux/slices/news/news.slice";
import userService from "../../redux/services/user/user.service";

const NewsPage: FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const elementRef = useRef<HTMLDivElement>(null);
    const [{token}] = useCookies(['token']);
    const {data: user} = userService.useGetUserInfoQuery(token)

    useEffect(() => {
        if (!token)
            navigate(Endpoint.AUTH);
    }, [token, navigate]);

    useEffect(() => {
        if (elementRef.current) {
            const newsCount = Math.floor((elementRef.current.offsetHeight - 100) / 150);
            dispatch(setLimit(newsCount));
        }
    }, [dispatch])

    const navbar = useMemo(() => getNavbarByRole(user?.role || Role.READER), [user?.role]);
    const defaultPath = useMemo(() => getDefaultTabByRole(user?.role || Role.READER), [user?.role]);

    return <NewsPageStyled>
        <NewsBody ref={elementRef}>
            <NewsNavbar defaultPath={defaultPath}>
                {navbar}
            </NewsNavbar>
            <Outlet/>
        </NewsBody>
    </NewsPageStyled>
};

export default NewsPage;