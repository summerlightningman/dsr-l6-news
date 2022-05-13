import {NewsDescription, NewsHeader, Tag} from "../news-page.types";


export interface NewsListItemProps {
    header: NewsHeader,
    description: NewsDescription,
    tags: Tag[]
}