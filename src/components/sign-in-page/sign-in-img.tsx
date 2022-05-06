import styled from 'styled-components';
// @ts-ignore
import img from "../../assets/news-login-img.jpg";

const SignInImg = styled.div`
  background-image: url(${img});
  height: 100vh;
  width: 50%;
  position: fixed;
  right: 0;
  top: 0;
  z-index: -1;
`;

export default SignInImg