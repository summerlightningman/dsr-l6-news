import {NewsDescription, NewsHeader, TagList} from "../../../types/news-post";


export interface NewsListItemProps {
    header: NewsHeader,
    description: NewsDescription,
    tags: TagList
}