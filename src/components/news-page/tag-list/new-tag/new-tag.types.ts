import {Tag} from "../../../../types/news-post";


export interface NewTagFormValues {
    name: Tag
}

export interface NewTagFormErrors {
    name?: string
}