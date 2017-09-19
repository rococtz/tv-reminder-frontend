import styled from 'styled-components';
import { colors } from '../../styles/styles';

export const ScheduleViewBase = styled.div`
  margin: 3em;
  text-align: center;
`;

export const SectionHeader = styled.h3`
  color: ${colors.divider};
  font-weight: 300;
  text-align: center;
  font-size: 2em;
  font-family: Roboto;
`;

export const UpcomingContainer = styled.div`
  margin: 0.5em;
`;

export const NoEpisodes = styled.div`
  color: ${colors.divider};
  font-style: italic;
  opacity: 0.8;
  font-family: Roboto;
  font-size: 1.5em;
`;
