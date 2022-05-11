import {FC, useState} from 'react';
import NewsListItemStyled from "./news-list-item.styled";
import NewsTitle from "./news-title.styled";
import NewsReadStatus from "./news-read-status.styled";
import NewsDescription from "./news-description.styled";
import NewsTagList from "./news-tag-list.styled";
import NewsPublicationStatus from "./news-publication-status.styled";
import ShowMoreButton from "./show-more-button.styled";
import {NewsListItemProps} from "./news-list-item.types";

const NewsListItem: FC<NewsListItemProps> = ({header, description, tags}) => {
    const [isFullText, setIsFullText] = useState(false);
    const showMore = () => setIsFullText(true)
    const showMoreBtn = <ShowMoreButton onClick={showMore}>Show more...</ShowMoreButton>;

    const maxTextLength = 75;
    const isTextLong = description.length > maxTextLength;
    const descriptionShort = isTextLong ? `${description.slice(0, 75)}...` : description;

    return <NewsListItemStyled>
        <NewsTitle>{header}</NewsTitle>
        <NewsReadStatus>Unread</NewsReadStatus>
        <NewsDescription>{isFullText ? description : descriptionShort} {!isFullText && isTextLong && showMoreBtn}</NewsDescription>
        <NewsTagList>{tags.map(tag => `#${tag}`).join('   ')}</NewsTagList>
        <NewsPublicationStatus>Draft</NewsPublicationStatus>
    </NewsListItemStyled>
};

export default NewsListItem;