import styled from 'styled-components';
import {formControlWidth} from "./constants";

const FormErrMsg = styled.span`
  width: ${formControlWidth};
  display: inline-block;
  height: 24px;
  text-align: left;
  padding: 0 18px;
  color: #E94B4B;
`;

export default FormErrMsg