import styled from 'styled-components';
import {NewsNavbarItemProps} from "../news-page.types";
import {Link} from "react-router-dom";

const NewsNavbarItem = styled(Link)<NewsNavbarItemProps>`
  background-color: ${({isActive}) => isActive ? '#FFD5AB' : '#F37731'};
  color: ${({isActive}) => isActive ? '#FE295D' : '#FFD5AB'};
  
  width: 160px;
  height: 50px;

  font-family: 'Inter', sans-serif;
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

export default NewsNavbarItem