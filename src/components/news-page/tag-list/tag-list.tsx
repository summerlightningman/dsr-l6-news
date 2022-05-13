import {FC} from 'react';
import {useQuery} from "react-query";
import {getTagList} from "../../../http";
import {Tag} from '../news-page.types';
import TagListItem from "./tag-list-item/tag-list-item";
import NewsContentStyled from "../news-content/news-content.styled";

const TagList: FC = () => {
    const {data: list} = useQuery('tagList', getTagList);

    if (list)
        return <NewsContentStyled>
            {
                list.map(
                    (tag: Tag, idx: number) =>
                        <TagListItem
                            name={tag}
                            key={`${tag}${idx}`}
                        />
                )
            }
        </NewsContentStyled>
    return <h1>No data</h1>
};

export default TagList;