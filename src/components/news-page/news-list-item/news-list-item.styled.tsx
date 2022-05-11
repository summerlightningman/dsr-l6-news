import styled from 'styled-components';
import NewsTitle from "./news-title.styled";
import NewsDescription from "./news-description.styled";
import NewsReadStatus from "./news-read-status.styled";
import NewsTagList from "./news-tag-list.styled";
import NewsPublicationStatus from "./news-publication-status.styled";

const NewsListItemStyled = styled.div`
  width: 100%;

  padding: 5px 15px 10px 30px;
  display: grid;
  grid-template-rows: 60px auto 45px;
  grid-template-columns: 7fr 1fr;
  border-bottom: 1px solid #FE295D;

  ${NewsTitle} {
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
  }
`;

export default NewsListItemStyled