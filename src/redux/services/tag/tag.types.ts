import {RequiresToken} from "../../types";
import {TagList} from "../../../types/news-post";

export interface AddTagRequest extends RequiresToken {
    tagList: TagList
}