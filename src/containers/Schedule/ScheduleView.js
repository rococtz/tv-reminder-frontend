import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import EpisodeCard from '../../components/EpisodeCard';
import defaultImage from '../../images/tv.png';
import {
  ScheduleViewBase,
  SectionHeader,
  UpcomingContainer,
  NoEpisodes
} from './styles';
import { getFormattedTimeDifference } from './utils';

const ScheduleView = ({ inProgress, nextEpisodes, pastEpisodes }) => {
  const next = R.sortBy(R.prop('airstamp'), nextEpisodes);
  const past = R.reverse(R.sortBy(R.prop('airstamp'), pastEpisodes));
  const currentDate = new Date();
  return (
    <ScheduleViewBase>
      <SectionHeader> UPCOMING </SectionHeader>
      {
        next.length ? (
          <UpcomingContainer>
            {next.map((episode, index) => (
              <EpisodeCard
                key={index}
                name={episode.name}
                showName={episode.showName}
                airStamp={getFormattedTimeDifference(episode.airstamp, currentDate)}
                season={episode.season}
                number={episode.number}
                image={R.path(['image', 'medium'], episode)}
              />))}
          </UpcomingContainer>
        ) : (
            <NoEpisodes>
              None of your episodes are coming up soon.
              Go to to the SEARCH section and add some more shows to your favorites.
            </NoEpisodes>
          )
      }
      <SectionHeader> RELEASED </SectionHeader>
      <div>
        {past.map((episode, index) => (
          <EpisodeCard
            key={index}
            name={episode.name}
            showName={episode.showName}
            airStamp={getFormattedTimeDifference(episode.airstamp, currentDate)}
            season={episode.season}
            number={episode.number}
            image={R.path(['image', 'medium'], episode) || defaultImage}
          />))}
      </div>
    </ScheduleViewBase>
  );
};

ScheduleView.propTypes = {
  inProgress: PropTypes.bool.isRequired,
  nextEpisodes: PropTypes.array.isRequired,
  pastEpisodes: PropTypes.array.isRequired
};

export default ScheduleView;
