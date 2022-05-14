import {NewsDescription, NewsHeader, NewsPost, Tag} from "../../../components/news-page/news-page.types";
import {Token} from "../../../components/auth-page/auth-page.types";
import {QueryParameters} from "../../../http";

export interface NewsState {
    list: NewsPost[],
    offset: number,
    limit: number,
    newPostHeader: NewsHeader,
    newPostDescription: NewsDescription,
    newPostTags: Tag[],
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
    tags: Tag[],
    isDraft: boolean
}