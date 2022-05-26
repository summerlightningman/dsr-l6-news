import styled from 'styled-components';

const NewsPaginatorStyled = styled.footer`
  position: absolute;
  bottom: 0;
  height: 50px;

  background: ${props => props.theme.color.darkOrange};
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default NewsPaginatorStyled