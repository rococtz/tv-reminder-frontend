import Paper from 'material-ui/Paper';
import HighlightOffIcon from 'material-ui-icons/HighlightOff';
import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const PaperStyled = styled(Paper)`
  display: inline-block;
  height: 400px;
  width: 280px;
  text-align: center;
  margin: 1em;
  background-color: ${colors.secondary} !important;
  position: relative;
`;

export const ShowName = styled.span`
  color: ${colors.divider};
  font-size: 0.75em;
`;

export const ShowStatus = styled.span`
  font-style: italic;
  color: ${colors.divider};
`;

export const ImageStyled = styled.img`
  height: 100%;
  width: 100%;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
`;

export const CloseIconStyled = styled(HighlightOffIcon)`
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5em;
  color: ${colors.divider};
`;
