import styled from 'styled-components';
import UserInfoStyled from "../user-info/user-info.styled";


const NewsNavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;


  ${UserInfoStyled} {
    margin-left: auto;
  }
`;

export default NewsNavbarStyled