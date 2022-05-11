import {FC, useState} from 'react';
import NewsListItemStyled from "./news-list-item.styled";
import NewsTitle from "./news-title.styled";
import NewsReadStatus from "./news-read-status.styled";
import NewsDescription from "./news-description.styled";
import NewsTagList from "./news-tag-list.styled";
import NewsPublicationStatus from "./news-publication-status.styled";
import ShowMoreButton from "./show-more-button.styled";

const NewsListItem: FC = () => {
    const [isFullText, setIsFullText] = useState(false);
    const showMore = () => setIsFullText(true)
    const showMoreBtn = <ShowMoreButton onClick={showMore}>Show more...</ShowMoreButton>;

    const maxTextLength = 75;
    const description = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus asperiores autem consequatur dolorum expedita facere in iure iusto laudantium neque obcaecati officia, optio quam quia recusandae similique voluptatum. Architecto aspernatur, blanditiis dolor ex, hic laborum, maxime minima modiofficiis provident repellat sapiente sed voluptate! Amet cum id labore quisquam repellat.'
    const isTextLong = description.length > maxTextLength;
    const descriptionShort = isTextLong ? `${description.slice(0, 75)}...` : description;
    const title = 'Title';

    return <NewsListItemStyled>
        <NewsTitle>{title}</NewsTitle>
        <NewsReadStatus>Unread</NewsReadStatus>
        <NewsDescription>{isFullText ? description : descriptionShort} {!isFullText && isTextLong && showMoreBtn}</NewsDescription>
        <NewsTagList>#porn #erotic #tits #bickdick #creampie</NewsTagList>
        <NewsPublicationStatus>Draft</NewsPublicationStatus>
    </NewsListItemStyled>
};

export default NewsListItem;