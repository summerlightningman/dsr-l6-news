import styled from 'styled-components';

import NewsDescription from "./news-description.styled";
import NewsReadStatus from "./news-read-status.styled";
import NewsTagList from "./news-tag-list.styled";
import NewsPublicationStatus from "./news-publication-status.styled";
import {darkPink} from "../../styled/constants";
import ItemHeader from "../../styled/item-header.styled";

const NewsListItemStyled = styled.li`
  width: 100%;
  
  padding: 5px 15px 10px 30px;
  display: grid;
  grid-template-rows: 60px auto 45px;
  grid-template-columns: 7fr 1fr;
  border-bottom: 1px solid ${darkPink};

  ${ItemHeader} {
    grid-row: 1;
    grid-column: 1;
  }

  ${NewsReadStatus} {
    grid-row: 1;
    grid-column: 2;
    justify-self: end;
  }

  ${NewsDescription} {
    grid-row: 2;
    grid-column: 1 / 3;
  }

  ${NewsTagList} {
    grid-row: 3;
    grid-column: 1;
  }

  ${NewsPublicationStatus} {
    grid-row: 3;
    grid-column: 2;
    justify-self: end;
    align-self: end;
  }
`;

export default NewsListItemStyled