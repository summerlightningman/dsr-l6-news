import {FC} from 'react';

import TagListItemStyled from "./tag-list-item.styled";
import TagListItemName from "./tag-list-item-name.styled";
import {TagListItemProps} from "./tag-list-item.types";
import SubscribeButton from "./subscribe-button.styled";
import {useCookies} from "react-cookie";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import switchTagSub from "../../../../redux/slices/user/switch-tag-subscription.thunk";

const TagListItem: FC<TagListItemProps> = ({name: tag}) => {
    const dispatch = useAppDispatch();
    const {tags} = useAppSelector(state => state.user);
    const [{token}] = useCookies(['token']);

    const switchSubscription = () => {
        dispatch(switchTagSub({token, tag}));
    };

    const subscribeButton = <SubscribeButton isSubscribed={true} onClick={switchSubscription}>
        Subscribe
    </SubscribeButton>;

    const unsubscribeButton = <SubscribeButton isSubscribed={false} onClick={switchSubscription}>
        Unsubscribe
    </SubscribeButton>;

    return <TagListItemStyled>
        <TagListItemName>{tag}</TagListItemName>
        {tags.includes(tag) ? unsubscribeButton : subscribeButton}
    </TagListItemStyled>
};

export default TagListItem;