import styled from 'styled-components';
import {lightOrange} from "../../../styled/constants";

const NewTagStyled = styled.div`
  position: fixed;
  bottom: 0;

  background: ${lightOrange};
  max-width: inherit;

  width: inherit;
  height: 70px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

`;

export default NewTagStyled
