import {NewsDescription, NewsHeader, NewsPost} from "../../../components/news-page/news-page.types";
import {Token} from "../../../components/auth-page/auth-page.types";
import {QueryParameters} from "../../../http";

export interface NewsState {
    list: NewsPost[],
    newPostHeader: NewsHeader,
    newPostDescription: NewsDescription,
    offset: number,
    limit: number
}

export interface FetchNewsListPayload extends QueryParameters {
    token: Token,

}