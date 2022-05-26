import styled from 'styled-components';
import {FormGroupProps} from "./types";

const FormGroup = styled.div<FormGroupProps>`
  width: ${props => props.width || props.theme.width.formControlWidth};
  display: flex;
  flex-direction: ${props => props.direction || 'column'};
`;

export default FormGroup