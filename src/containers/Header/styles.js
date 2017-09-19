import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar';
import Button from 'material-ui/Button';
import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const AppBarStyled = styled(AppBar)`
  background-color: ${colors.secondary} !important;
`;

export const ButtonStyled = styled(Button)`
  position: absolute !important;
  right: 0;
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
`;