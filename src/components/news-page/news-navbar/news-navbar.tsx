import {FC, useEffect} from 'react';
import UserInfo from "../user-info/user-info";
import NewsNavbarStyled from "./news-navbar.styled";
import {NewsNavbarProps} from "./news-navbar.types";
import {useNavigate} from "react-router-dom";

const NewsNavbar: FC<NewsNavbarProps> = ({children, defaultPath}) => {
    const navigate = useNavigate();
    const path = window.location.pathname.replace('/', '');

    useEffect(() => {
        if (!path)
            navigate(defaultPath);
    }, [defaultPath, navigate, path]);

    return <div>
        <NewsNavbarStyled>
            {children}
            <UserInfo/>
        </NewsNavbarStyled>
    </div>
};

export default NewsNavbar;