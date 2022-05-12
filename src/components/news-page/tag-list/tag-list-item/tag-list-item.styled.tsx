import styled from 'styled-components';
import {darkPink} from "../../../styled/constants";

const TagListItemStyled = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  border-bottom: 1px solid ${darkPink};
  padding: 0 15px;
`;

export default TagListItemStyled