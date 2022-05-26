import styled from "styled-components";
import NewsTagListStyled from "../news-list-item/news-tag-list.styled";

const TagStyled = styled(NewsTagListStyled)`
  padding: 10px 5px;
  color: ${props => props.theme.color.darkPink};

  & > button {
    margin-left: 5px;
    border: none;
    background: none;
    font-weight: 900;
    cursor: pointer;

    :hover {
      color: ${props => props.theme.color.lightPink}
    }
  }
`;

export default TagStyled