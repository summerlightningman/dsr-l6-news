import {FC, useEffect} from 'react';
import {Tag} from '../news-page.types';
import TagListItem from "./tag-list-item/tag-list-item";
import NewsContentStyled from "../../styled/news-content.styled";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import fetchTagList from "../../../redux/slices/tag/fetch-tag-list";

const TagList: FC = () => {
    const {list: tagList} = useAppSelector(state => state.tag);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTagList())
    }, [dispatch]);

    if (tagList)
        return <NewsContentStyled>
            {
                tagList.map(
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