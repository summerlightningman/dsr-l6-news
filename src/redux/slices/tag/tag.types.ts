import {TagList} from "../../../types/news-post";

export enum TagError {
    LOAD_ERROR = 'LOAD_ERR'
}

export interface TagState {
    list: TagList,
    isLoading: boolean,
    error?: TagError
}
