import {FC} from 'react';

import TagListItem from "./tag-list-item/tag-list-item";
import NewsContentStyled from "../../styled/news-content.styled";
import {Tag} from "../../../types/news-post";
import tagService from "../../../redux/services/tag/tag.service";

const TagList: FC = () => {
    const {data: tagList, status} = tagService.useTagListQuery();

    const getContentByStatus = () => {
        switch (status) {
            case 'pending':
                return <h2>Loading...</h2>
            case 'rejected':
                return <h2>Connection error. Try again later.</h2>
            case 'fulfilled':
                return tagList?.map(
                    (tag: Tag, idx: number) =>
                        <TagListItem
                            name={tag}
                            key={`${tag}${idx}`}
                        />
                )
        }
    };


    return <NewsContentStyled>
        {getContentByStatus()}
    </NewsContentStyled>
};

export default TagList;