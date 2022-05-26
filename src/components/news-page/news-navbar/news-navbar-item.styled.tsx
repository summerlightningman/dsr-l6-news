import styled from 'styled-components';
import {NavLink} from "react-router-dom";

const NewsNavbarItemStyled = styled(NavLink)`

  background-color: ${props => props.theme.color.darkOrange};
  color: ${props => props.theme.color.lightOrange};

  width: 160px;
  height: 50px;

  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  text-decoration: none;


  border-radius: 25px 25px 0 0;
`;

export default NewsNavbarItemStyled