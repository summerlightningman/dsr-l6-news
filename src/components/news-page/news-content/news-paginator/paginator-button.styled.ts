import styled from 'styled-components';
import {lightOrange} from "../../../styled/constants";

const PaginatorButton = styled.button`
  border: none;
  background: none;
  color: ${lightOrange};
  border-bottom: 2px solid ${lightOrange};
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }
`;

export default PaginatorButton