import {FC} from 'react';

import NewsPaginatorStyled from "./news-paginator.styled";
import ButtonsPanel from "./buttons-panel.styled";
import PaginatorButton from "./paginator-button.styled";

const NewsPaginator: FC = () => {
    return <NewsPaginatorStyled>
        <ButtonsPanel>
            <PaginatorButton>&lt;&lt;  Prev</PaginatorButton>
            <PaginatorButton>Next  &gt;&gt;</PaginatorButton>
        </ButtonsPanel>
    </NewsPaginatorStyled>
};

export default NewsPaginator;