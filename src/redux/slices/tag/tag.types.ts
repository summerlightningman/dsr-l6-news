import {Tag} from '../../../components/news-page/news-page.types'

export enum TagError {
    LOAD_ERROR = 'LOAD_ERR'
}

export interface TagState {
    list: Tag[],
    isLoading: boolean,
    error?: TagError
}
