import styled from 'styled-components';
import {SubscribeButtonProps} from "./tag-list-item.types";
import {darkOrange, darkYellow} from "../../../styled/constants";
import Button from "../../../styled/button.styled";

const SubscribeButton = styled(Button)<SubscribeButtonProps>`
  background-color: ${({isSubscribed}) => isSubscribed ? darkOrange : darkYellow};
  color: ${({isSubscribed}) => isSubscribed ? 'white' : 'black'};
`;

export default SubscribeButton