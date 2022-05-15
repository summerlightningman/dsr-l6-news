import {FC, useState} from 'react';
import NewsListItemStyled from "./news-list-item.styled";
import NewsReadStatus from "./news-read-status.styled";
import NewsDescription from "./news-description.styled";
import NewsTagList from "./news-tag-list.styled";
import NewsPublicationStatus from "./news-publication-status.styled";
import ShowMoreButton from "./show-more-button.styled";
import {NewsListItemProps} from "./news-list-item.types";
import ItemHeader from "../../styled/item-header.styled";

const NewsListItem: FC<NewsListItemProps> = ({header, description, tags}) => {
    const [isFullText, setIsFullText] = useState(false);
    const showMore = () => setIsFullText(true);
    const showLess = () => setIsFullText(false);

    const showMoreBtn = <ShowMoreButton onClick={showMore}>Show more...</ShowMoreButton>;
    const showLessBtn = <ShowMoreButton onClick={showLess}>Hide</ShowMoreButton>

    const maxTextLength = 75;
    const isTextLong = description.length > maxTextLength;
    const descriptionShort = isTextLong ? `${description.slice(0, maxTextLength)}...` : description;

    return <NewsListItemStyled>
        <ItemHeader>{header}</ItemHeader>
        <NewsReadStatus>Unread</NewsReadStatus>
        <NewsDescription>{isFullText ? description : descriptionShort} {(!isFullText && isTextLong) ? showMoreBtn : (isTextLong && isFullText && showLessBtn)}</NewsDescription>
        <NewsTagList>{tags.map(tag => `#${tag}`).join('   ')}</NewsTagList>
        <NewsPublicationStatus>Draft</NewsPublicationStatus>
    </NewsListItemStyled>
};

export default NewsListItem;