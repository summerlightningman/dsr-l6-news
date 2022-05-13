import {FC} from 'react';

import NewsPaginatorStyled from "./news-paginator.styled";
import ButtonsPanel from "./buttons-panel.styled";
import PaginatorButton from "./paginator-button.styled";
import {useAppDispatch, useAppSelector} from "../../../../redux/hooks";
import {decrementOffset, incrementOffset} from "../../../../redux/slices/news/news.slice";

const NewsPaginator: FC = () => {
    const dispatch = useAppDispatch();
    const {offset, limit, list} = useAppSelector(state => state.news)

    const onPrevPageClick = () => dispatch(decrementOffset());
    const onNextPageClick = () => dispatch(incrementOffset())

    return <NewsPaginatorStyled>
        <ButtonsPanel>
            <PaginatorButton onClick={onPrevPageClick} disabled={offset !== 0}>&lt;&lt;  Prev</PaginatorButton>
            <PaginatorButton onClick={onNextPageClick} disabled={list.length >= limit}>Next  &gt;&gt;</PaginatorButton>
        </ButtonsPanel>
    </NewsPaginatorStyled>
};

export default NewsPaginator;