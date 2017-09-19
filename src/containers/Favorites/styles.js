import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const FavoritesViewBase = styled.div`
  text-align: center;
  margin: 1em;
`;

export const NoResults = styled.p`
  color: ${colors.divider};
  font-style: italic;
  opacity: 0.8;
  font-family: Roboto;
  font-size: 1.5em;
`;
