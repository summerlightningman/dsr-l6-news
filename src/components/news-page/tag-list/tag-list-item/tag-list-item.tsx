import {FC, useContext} from 'react';

import {UserContext} from '../../news-page.helpers';

import TagListItemStyled from "./tag-list-item.styled";
import TagListItemName from "./tag-list-item-name.styled";
import {TagListItemProps} from "./tag-list-item.types";
import SubscribeButton from "./subscribe-button.styled";
import {setUserData} from "../../../../http";
import {useCookies} from "react-cookie";

const TagListItem: FC<TagListItemProps> = ({name, isSubscribed}) => {
    const user = useContext(UserContext);
    const [{token}] = useCookies(['token']);

    const subscribe = () => setUserData(token, {
        ...user,
        tags: [...user.tags, name]
    });

    const subscribeButton = <SubscribeButton isSubscribed={true} onClick={subscribe}>
        Subscribe
    </SubscribeButton>;

    const unsubscribe = () => setUserData(token, {
        ...user,
        tags: user.tags.filter(tag => tag !== name)
    });

    const unsubscribeButton = <SubscribeButton isSubscribed={false} onClick={unsubscribe}>
        Unsubscribe
    </SubscribeButton>;

    return <TagListItemStyled>
        <TagListItemName>{name}</TagListItemName>
        {isSubscribed ? unsubscribeButton : subscribeButton}
    </TagListItemStyled>
};

export default TagListItem;