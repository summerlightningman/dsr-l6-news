import styled from 'styled-components';

const UserListItemStyled = styled.li`
  display: grid;
  grid-template-rows: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px 15px;
  border-bottom: 1px solid ${props => props.theme.color.darkPink};
  border-bottom: 1px solid ${props => props.theme.color.darkPink};

  select {
    width: 100%;
    align-self: center;
    justify-self: end;
  }
`;

export default UserListItemStyled