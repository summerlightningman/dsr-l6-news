import styled from 'styled-components';

const ShowMoreButton = styled.button`
  border: none;
  background: none;
  font-family: ${props => props.theme.font.inter};
  font-style: italic;
  color: ${props => props.theme.color.gray};
  padding-left: 10px;
  font-size: 24px;
  line-height: 39px;
  font-weight: 800;

  :hover {
    cursor: pointer;
    color: #666666;
  }
`;

export default ShowMoreButton