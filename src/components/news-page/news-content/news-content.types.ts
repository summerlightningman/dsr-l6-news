import {NewsPost} from "../news-page.types";

export interface NewsContentProps {
    filterByTag?: boolean
}


export interface ResponseData {
    news: {
        list: NewsPost[],
        offset: string,
        limit: string,
        total: number
    }
}