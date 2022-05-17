import {FC} from 'react';

import TagListItemStyled from "./tag-list-item.styled";
import TagListItemName from "./tag-list-item-name.styled";
import {TagListItemProps} from "./tag-list-item.types";
import SubscribeButton from "./subscribe-button.styled";
import {useCookies} from "react-cookie";
import userService from "../../../../redux/services/user/user.service";


const TagListItem: FC<TagListItemProps> = ({name: tag}) => {
    const [{token}] = useCookies(['token']);
    const {data: user} = userService.useGetUserInfoQuery(token);

    const switchSubscription = () => {
        // dispatch(switchTagSub({token, tag}));
    };

    const subscribeButton = <SubscribeButton isSubscribed={true} onClick={switchSubscription}>
        Subscribe
    </SubscribeButton>;

    const unsubscribeButton = <SubscribeButton isSubscribed={false} onClick={switchSubscription}>
        Unsubscribe
    </SubscribeButton>;

    return <TagListItemStyled>
        <TagListItemName>{tag}</TagListItemName>
        {user?.tags.includes(tag) ? unsubscribeButton : subscribeButton}
    </TagListItemStyled>
};

export default TagListItem;