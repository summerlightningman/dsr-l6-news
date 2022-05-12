import styled from 'styled-components';
import {SubscribeButtonProps} from "./tag-list-item.types";
import {darkOrange, darkYellow} from "../../../styled/constants";

const SubscribeButton = styled.button<SubscribeButtonProps>`
  width: 220px;
  height: 50px;
  border-radius: 12px;
  border: none;

  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({isSubscribed}) => isSubscribed ? darkOrange : darkYellow};
  color: ${({isSubscribed}) => isSubscribed ? 'white' : 'black'};

  cursor: pointer;
`;

export default SubscribeButton