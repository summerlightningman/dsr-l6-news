import styled from 'styled-components';

const NewTagStyled = styled.div`
  position: fixed;
  bottom: 0;

  background: ${props => props.theme.color.lightOrange};
  max-width: inherit;

  width: inherit;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export default NewTagStyled
