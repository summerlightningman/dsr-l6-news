import styled from 'styled-components';
import {lightPink} from "../../styled/constants";

const NewsPublicationStatus = styled.span`
  font-family: 'Inter', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 39px;

  display: flex;
  align-items: center;
  text-align: right;

  color: ${lightPink};
`;

export default NewsPublicationStatus