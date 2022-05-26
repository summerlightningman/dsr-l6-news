import styled from 'styled-components';

const NewsPublicationStatus = styled.span`
  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${props => props.theme.color.lightPink};
`;

export default NewsPublicationStatus