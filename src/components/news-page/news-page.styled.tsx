import styled from 'styled-components';
// @ts-ignore
import img from '../../assets/news-blured.png';

const NewsPageStyled = styled.main`
  width: 100vw;
  height: 100vh;

  //filter: blur(30px);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.15)), url(${img}) center;
  overflow: hidden;
  object-fit: contain;
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: row;
  justify-content: center;

  .active {
    background-color: #FFD5AB;
    color: #FE295D;
  }
`;

export default NewsPageStyled