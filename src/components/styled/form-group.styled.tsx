import styled from 'styled-components';
import {formControlWidth} from "./constants";
import {FormGroupProps} from "./types";

const FormGroup = styled.div<FormGroupProps>`
  width: ${props => props.width || formControlWidth}
`;

export default FormGroup