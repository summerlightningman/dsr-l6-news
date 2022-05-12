import {FC} from 'react';
import TagListItemStyled from "./tag-list-item.styled";
import TagListItemName from "./tag-list-item-name.styled";
import {TagListItemProps} from "./tag-list-item.types";
import SubscribeButton from "./subscribe-button.styled";

const TagListItem: FC<TagListItemProps> = ({name, isSubscribed}) => {
    return <TagListItemStyled>
        <TagListItemName>{name}</TagListItemName>
        <SubscribeButton isSubscribed={isSubscribed}>
            {isSubscribed ? 'Unsubscribe' : 'Subscribe'}
        </SubscribeButton>
    </TagListItemStyled>
};

export default TagListItem;