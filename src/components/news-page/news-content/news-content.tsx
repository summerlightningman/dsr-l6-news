import {FC} from 'react';
import NewsContentStyled from "./news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";

const NewsContent: FC = () => {
    return <NewsContentStyled>
        <NewsListItem/>
    </NewsContentStyled>
};

export default NewsContent;