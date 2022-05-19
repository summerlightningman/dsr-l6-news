import {NewsDescription, NewsHeader, TagList} from "../../../types/news-post";

export interface NewsState {

    offset: number,
    limit: number,
    newPostHeader: NewsHeader,
    newPostDescription: NewsDescription,
    newPostTags: TagList,
    errors?: {
        header?: string,
        description?: string,
        tags?: string
    },
    isDraft: boolean
}