import {Tag} from '../../news-page.types';

export interface TagListItemProps {
    name: Tag;
    isSubscribed: boolean
}

export interface SubscribeButtonProps {
    isSubscribed: boolean
}