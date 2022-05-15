import styled from 'styled-components';
import UserStyled from "../user-info/user-info.styled";


const NewsNavbarStyled = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;


  ${UserStyled} {
    margin-left: auto;
  }
`;

export default NewsNavbarStyled