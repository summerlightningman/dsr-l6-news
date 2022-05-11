import {FC} from 'react';

import NewsPaginatorStyled from "./news-paginator.styled";
import ButtonsPanel from "./buttons-panel.styled";
import PaginatorButton from "./paginator-button.styled";
import {NewsPaginatorProps} from "./news-paginator.types";

const NewsPaginator: FC<NewsPaginatorProps> = ({
                                                   onNextPageClick,
                                                   onPrevPageClick,
                                                   isNextAvailable,
                                                   isPrevAvailable
                                               }) => {
    return <NewsPaginatorStyled>
        <ButtonsPanel>
            <PaginatorButton onClick={onPrevPageClick} disabled={!isPrevAvailable}>&lt;&lt;  Prev</PaginatorButton>
            <PaginatorButton onClick={onNextPageClick} disabled={!isNextAvailable}>Next  &gt;&gt;</PaginatorButton>
        </ButtonsPanel>
    </NewsPaginatorStyled>
};

export default NewsPaginator;