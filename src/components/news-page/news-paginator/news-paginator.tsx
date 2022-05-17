import {FC} from 'react';

import NewsPaginatorStyled from "./news-paginator.styled";
import ButtonsPanel from "./buttons-panel.styled";
import PaginatorButton from "./paginator-button.styled";
import {useAppDispatch, useAppSelector} from "../../../redux/hooks";
import {decrementOffset, incrementOffset} from "../../../redux/slices/news/news.slice";
import newsService from "../../../redux/services/news/news.service";
import {useCookies} from "react-cookie";

const NewsPaginator: FC = () => {
    const dispatch = useAppDispatch();
    const [{token}] = useCookies(['token']);
    const {offset, limit} = useAppSelector(state => state.news);
    const {data: list} = newsService.useGetAllNewsListQuery({token, offset, limit});

    const onPrevPageClick = () => dispatch(decrementOffset());
    const onNextPageClick = () => dispatch(incrementOffset());

    const postCount = list?.length ?? 0;

    return <NewsPaginatorStyled>
        <ButtonsPanel>
            <PaginatorButton onClick={onPrevPageClick} disabled={offset === 0}>&lt;&lt;  Prev</PaginatorButton>
            <PaginatorButton onClick={onNextPageClick} disabled={postCount < limit}>Next  &gt;&gt;</PaginatorButton>
        </ButtonsPanel>
    </NewsPaginatorStyled>
};

export default NewsPaginator;