import styled from 'styled-components';

const UserStyled = styled.div`
  background-color: #F37731;
  color: #FFD5AB;

  height: 50px;
  border-radius: 25px 25px 0 0;
  padding: 0 20px;

  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 44px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;

`;

export default UserStyled