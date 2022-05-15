import {Token} from "../../../components/auth-page/auth-page.types";
import {QueryParameters} from "../../../http";
import {NewsDescription, NewsHeader, NewsPost, TagList} from "../../../types/news-post";

export interface NewsState {
    list: NewsPost[],

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

export interface FetchNewsListPayload extends QueryParameters {
    token: Token,

}

export interface AddNewsPostPayload {
    token: Token,
    header: NewsHeader,
    description: NewsDescription,
    tags: TagList,
    isDraft: boolean
}