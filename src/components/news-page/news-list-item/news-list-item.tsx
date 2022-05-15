import {FC, useState} from 'react';
import {Tag} from "../../../types/news-post";
import NewsListItemStyled from "./news-list-item.styled";
import NewsDescription from "./news-description.styled";
import NewsTagList from "./news-tag-list.styled";
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

    const read = () => {

    }

    return <NewsListItemStyled onMouseEnter={read}>
        <ItemHeader>{header}</ItemHeader>
        {/*<NewsReadStatus>Unread</NewsReadStatus>*/}
        {isTextLong ?
            <NewsDescription>{isFullText ? description : descriptionShort} {isFullText ? showLessBtn : showMoreBtn}</NewsDescription>
            :
            <NewsDescription>{isFullText ? description : descriptionShort}</NewsDescription>
        }
        <NewsTagList>{tags.map((tag: Tag) => `#${tag}`).join('   ')}</NewsTagList>
        {/*<NewsPublicationStatus>Draft</NewsPublicationStatus>*/}
    </NewsListItemStyled>
};

export default NewsListItem;