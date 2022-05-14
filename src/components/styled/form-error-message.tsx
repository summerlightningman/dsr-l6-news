import styled from 'styled-components';
import {darkPink, formControlWidth} from "./constants";

const FormErrorMessage = styled.span`
  width: ${formControlWidth};
  display: inline-block;
  height: 24px;
  text-align: left;
  padding: 0 18px;
  color: ${darkPink};
`;

export default FormErrorMessage