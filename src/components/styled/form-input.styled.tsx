import styled from 'styled-components';
import {formControlWidth} from "./constants";

const FormInput = styled.input`
  background: #DBD1BF;
  padding: 18px;
  
  font-family: "Franklin Gothic Heavy", sans-serif;
  font-weight: 900;
  font-size: 36px;
  line-height: 41px;
  
  width: ${formControlWidth};
  height: 4rem;
  border: none;
  
  outline: none;
`;

export default FormInput