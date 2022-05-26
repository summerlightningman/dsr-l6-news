import styled from 'styled-components';

const TagListItemStyled = styled.li`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${props => props.theme.color.darkPink};
  padding: 0 15px;
`;

export default TagListItemStyled