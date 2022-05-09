import {FC, useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {useCookies} from "react-cookie";
import Endpoint from "../../endpoint";
import NewsPageStyled from "./news-page.styled";
import NewsBody from "./news-body.styled";
import NewsContent from "./news-content/news-content";
import NewsNavbarAdmin from "./news-navbar/news-navbar-admin";

const NewsPage: FC = () => {
    const navigate = useNavigate();
    const [cookies] = useCookies(['token']);


    useEffect(() => {
        if (!cookies.token)
            navigate(Endpoint.SIGN_IN);
    }, [cookies.token, navigate]);

    return <NewsPageStyled>
        <NewsBody>
            <NewsNavbarAdmin/>
            <NewsContent/>
        </NewsBody>
    </NewsPageStyled>
};

export default NewsPage;