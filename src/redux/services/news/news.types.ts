import {NewPostInfo, NewsPost, TagList} from "../../../types/news-post";
import {RequiresToken} from "../../types";

export interface GetNewsListResponse {
    news: {
        list: NewsPost[]
    }
}

export interface GetAllNewsListParams {
    offset: number,
    limit: number
}

export interface GetAllNewsListRequest extends RequiresToken {
    params: GetAllNewsListParams
}

export interface GetSubNewsListParams extends GetAllNewsListParams {
    tags: TagList
}

export interface GetSubNewsListRequest extends RequiresToken {
    params: GetSubNewsListParams
}


export interface AddNewPostRequest extends RequiresToken, NewPostInfo {

}