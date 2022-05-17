import styled from 'styled-components';
import {lightOrange} from "../../styled/constants";

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

  :disabled {
    color: #828282;
    border-bottom-color: #828282;
  }
`;

export default PaginatorButton