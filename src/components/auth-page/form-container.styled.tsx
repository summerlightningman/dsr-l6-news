import styled from 'styled-components';

const FormContainer = styled.section`
  width: 70vw;
  height: 100vh;
  background: linear-gradient(90deg, ${props => props.theme.color.themeBlue} 75%, rgba(196, 196, 196, 0) 100%);

  padding-top: 10vh;
`;

export default FormContainer