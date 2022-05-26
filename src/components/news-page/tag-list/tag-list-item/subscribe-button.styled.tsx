import styled from 'styled-components';
import {SubscribeButtonProps} from "./tag-list-item.types";
import Button from "../../../styled/button.styled";

const SubscribeButton = styled(Button)<SubscribeButtonProps>`
  background-color: ${props => props.isSubscribed ? props.theme.darkOrange : props.theme.darkYellow};
  color: ${({isSubscribed}) => isSubscribed ? 'white' : 'black'};
`;

export default SubscribeButton