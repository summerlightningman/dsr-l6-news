import styled from 'styled-components';
import FormInputStyled from "./form-input.styled";

const FormTextarea = styled(FormInputStyled).attrs(() => ({as: 'textarea'}))`
  background: white;
  width: 100%;
  height: 50vh;
`;

export default FormTextarea