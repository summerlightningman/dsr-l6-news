import {Description, Header, Tag} from "../news-page.types";


export interface NewsListItemProps {
    header: Header,
    description: Description,
    tags: Tag[]
}