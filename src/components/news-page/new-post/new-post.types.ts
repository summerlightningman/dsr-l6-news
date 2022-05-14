import {NewsPost} from "../news-page.types";

export type NewPostFormValues = Pick<NewsPost, 'header' | 'description' | 'tags'>;

export interface NewPostFormErrors {
    header?: string,
    description?: string,
    tags?: string
}