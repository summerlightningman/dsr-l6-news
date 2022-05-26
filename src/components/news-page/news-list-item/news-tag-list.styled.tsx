import styled from 'styled-components';

const NewsTagList = styled.span`
  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  display: flex;
  align-items: center;

  color: ${props => props.theme.color.gray};
`;

export default NewsTagList