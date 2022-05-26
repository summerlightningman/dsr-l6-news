import styled from 'styled-components';

const PaginatorButton = styled.button`
  border: none;
  background: none;
  color: ${props => props.theme.color.lightOrange};
  border-bottom: 2px solid ${props => props.theme.color.lightOrange};
  font-size: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    cursor: pointer;
  }

  :disabled {
    color: ${props => props.theme.color.gray};
    border-bottom-color: ${props => props.theme.color.gray};
  }
`;

export default PaginatorButton