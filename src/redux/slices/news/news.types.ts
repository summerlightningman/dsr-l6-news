import {NewsDescription, NewsHeader, NewsPost} from "../../../components/news-page/news-page.types";

export interface NewsState {
    list: NewsPost[],
    newPostHeader: NewsHeader,
    newPostDescription: NewsDescription
}