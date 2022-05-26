import styled from "styled-components";

const NewsReadStatus = styled.span`
  width: 110px;
  font-family: ${props => props.theme.font.inter};
  font-style: italic;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: right;

  color: ${props => props.theme.color.gray};
`;

export default NewsReadStatus