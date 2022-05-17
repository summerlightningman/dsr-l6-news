import {NewsPost, TagList} from "../../../types/news-post";
import {Token} from "../../../components/auth-page/auth-page.types";

export interface GetNewsListResponse {
    news: {
        list: NewsPost[]
    }
}

export interface GetAllNewsListParams {
    token: Token,
    offset: number,
    limit: number
}

export interface GetSubNewsListParams extends GetAllNewsListParams {
    tags: TagList
}