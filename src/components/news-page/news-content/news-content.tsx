import {FC} from 'react';
import NewsContentStyled from "./news-content.styled";
import NewsListItem from "../news-list-item/news-list-item";
import NewsPaginator from "./news-paginator/news-paginator";

const NewsContent: FC = () => {
    return <NewsContentStyled>
        <NewsListItem/>
        <NewsPaginator/>
    </NewsContentStyled>
};

export default NewsContent;