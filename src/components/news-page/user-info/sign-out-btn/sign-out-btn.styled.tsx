import styled from 'styled-components';

const SignOutBtnStyled = styled.button`
  background: #FFD900;
  border-radius: 57px;
  border: none;

  width: 100px;
  height: 30px;
  margin: 0 15px;

  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;


  :hover {
    background: #F0CC01;
    cursor: pointer;
  }
  
  :active {
    background: #FF6AAA;
  }
`;

export default SignOutBtnStyled