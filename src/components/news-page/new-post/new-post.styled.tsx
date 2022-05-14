import styled from 'styled-components';
import NewsContentStyled from "../../styled/news-content.styled";

const NewPostStyled = styled(NewsContentStyled).attrs(() => ({as: 'form'}))`
  padding: 20px 35px;
`;

export default NewPostStyled