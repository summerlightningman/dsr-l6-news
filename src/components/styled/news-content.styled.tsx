import styled from 'styled-components';

const NewsContentStyled = styled.ul`
  width: inherit;
  height: 100%;
  overflow-y: auto;

  background-color: ${props => props.theme.color.lightOrange};
`;

export default NewsContentStyled