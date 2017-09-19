import Button from 'material-ui/Button';
import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const LoginViewBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-weight: 200;
`;

export const ButtonStyled = styled(Button)`
  font-weight: bold;
  background-color: ${colors.secondary} !important;
  font-size: 2em !important;
`;