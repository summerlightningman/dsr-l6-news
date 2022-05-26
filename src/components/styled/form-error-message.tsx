import styled from 'styled-components';

const FormErrorMessage = styled.span`
  width: ${props => props.theme.width.formControlWidth};
  display: inline-block;
  height: 24px;
  text-align: left;
  padding: 0 18px;
  color: ${props => props.theme.color.darkPink};
`;

export default FormErrorMessage