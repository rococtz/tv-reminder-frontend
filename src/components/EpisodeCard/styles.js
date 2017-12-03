import styled from 'styled-components';
import Card, { CardMedia } from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import { colors } from '../../styles/styles';

export const PaperStyled = styled(Paper)`
  display: inline-block;
  width: 300px;
  text-align: center;
  margin: 0.5em;
  background-color: ${colors.secondary} !important;
`;

export const CardStyled = styled(Card)`
  background-color: 'rgba(0,0,0,0)';
`;

export const TextStyled = styled.span`
  color: ${colors.divider};
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardMediaStyled = styled(CardMedia)`
  height: 200px;
  width: 300px;
`;