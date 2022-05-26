import styled from "styled-components";

const Label = styled.label`
  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
`;

export default Label