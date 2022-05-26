import styled from 'styled-components';

const Button = styled.button`
  width: 220px;
  height: 50px;
  border-radius: 12px;
  border: none;

  font-family: ${props => props.theme.font.inter};
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme.color.darkOrange};
  color: white;

  cursor: pointer;
`;

export default Button