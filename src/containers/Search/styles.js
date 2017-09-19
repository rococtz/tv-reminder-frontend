import styled from 'styled-components';
import Input from 'material-ui/Input';
import { colors } from '../../styles/styles';

export const InputStyled = styled(Input)`
  color: ${colors.divider} !important;
`;

export const SearchBarOuterContainer = styled.div`
  text-align: center;
  margin: 2em;
`;

export const SearchBarContainer = styled.div`
  width: 400px;
  display: inline-block;
`;

export const ResultsContainer = styled.div`
  text-align: center;
`;