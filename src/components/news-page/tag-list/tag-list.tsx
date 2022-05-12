import {FC, useContext} from 'react';
import {useQuery} from "react-query";

import TagListStyled from "./tag-list.styled";
import {getTagList} from "../../../http";
import {Tag} from '../news-page.types';
import TagListItem from "./tag-list-item/tag-list-item";
import {UserContext} from '../news-page.helpers';

const TagList: FC = () => {
    const {data: list} = useQuery('tagList', getTagList);
    const user = useContext(UserContext);

    if (list)
        return <TagListStyled>
            {
                list.map(
                    (tag: Tag, idx: number) =>
                        <TagListItem
                            name={tag}
                            key={`${tag}${idx}`}
                            isSubscribed={user.tags.includes(tag)}
                        />
                )
            }

        </TagListStyled>
    return <h1>No data</h1>
};

export default TagList;