import styled from 'styled-components';
import {darkOrange} from "../../styled/constants";
import {newsBodyWidth} from "../news-body.styled";

const paginatorHeight = '50px';

const NewsPaginatorStyled = styled.footer`
  position: absolute;
  bottom: 0;
  height: ${paginatorHeight};

  background: ${darkOrange};
  width: ${newsBodyWidth};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default NewsPaginatorStyled