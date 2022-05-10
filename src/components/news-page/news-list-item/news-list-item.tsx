import {FC} from 'react';
import NewsListItemStyled from "./news-list-item.styled";
import NewsTitle from "./news-title.styled";
import NewsReadStatus from "./news-read-status.styled";
import NewsDescription from "./news-description.styled";
import NewsTagList from "./news-tag-list.styled";
import NewsPublicationStatus from "./news-publication-status.styled";

const NewsListItem: FC = () => {


    return <NewsListItemStyled>
        <NewsTitle>Title</NewsTitle>
        <NewsReadStatus>Unread</NewsReadStatus>
        <NewsDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores autem
            consequatur dolorum expedita facere in iure iusto laudantium neque obcaecati officia, optio quam quia
            recusandae similique voluptatum. Architecto aspernatur, blanditiis dolor ex, hic laborum, maxime minima modi
            officiis provident repellat sapiente sed voluptate! Amet cum id labore quisquam repellat.</NewsDescription>
        <NewsTagList>#porn #erotic #tits #bickdick #creampie</NewsTagList>
        <NewsPublicationStatus>Draft</NewsPublicationStatus>
    </NewsListItemStyled>
};

export default NewsListItem;