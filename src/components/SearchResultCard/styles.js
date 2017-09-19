import { colors } from '../../styles/styles';
import styled from 'styled-components';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import IconFavorite from 'material-ui-icons/Favorite';
import IconFavoriteBorder from 'material-ui-icons/FavoriteBorder';

export const PaperStyled = styled(Paper) `
  display: inline-block;
  height: 450px;
  width: 280px;
  text-align: center;
  margin: 1em;
  background-color: ${colors.secondary} !important;
  position: relative;
`;

export const HeaderContainer = styled.div`
  text-align: center;
`;

export const HeaderTitle = styled(Typography)`
  width: 80%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${colors.divider};
  display: inline-block;
`;

export const HeaderText = styled.span`
  color: ${colors.divider};
  font-size: 0.75em;
`;

export const ImageStyled = styled.img`
  height: 403px;
  width: 280px;
`;

export const NoImagePlaceholder = styled.div`
  height: 400px;
  width: 280px;
  margin-top: 0.5em;
  display: inline-block;
`;

const iconBaseStyle = `
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  margin: 0.5em;
  color: green;
`;

export const IconFavoriteStyled = styled(IconFavorite)`
  ${iconBaseStyle}
`;

export const IconFavoriteBorderStyled = styled(IconFavoriteBorder)`
  ${iconBaseStyle}
`;