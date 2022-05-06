import styled from 'styled-components';
import {formControlColor} from "./constants";

const SubmitButton = styled.button`
  background: ${formControlColor};
  
  width: 300px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family: "Franklin Gothic Heavy", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 41px;
`;

export default SubmitButton