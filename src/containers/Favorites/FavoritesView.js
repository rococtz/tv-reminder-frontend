import React from 'react';
import PropTypes from 'prop-types';
import R from 'ramda';
import ShowCard from '../../components/ShowCard';
import {
  FavoritesViewBase,
  NoResults
} from './styles';

const FavoritesView = ({ shows, inProgress, removeShowFromFavorites }) => {
  return (
    <FavoritesViewBase>
      {inProgress && <div> In progress </div>}
      {shows.map((show, index) => (
        <ShowCard
          key={index}
          name={show.name}
          status={show.status}
          image={R.path(['image', 'medium'], show)}
          clickAction={removeShowFromFavorites.bind(null, show)} />
      ))}
      {
        shows.length === 0 &&
        <NoResults>
          You have no favorite shows yet. Go to to the SEARCH section and add some shows to your list.
        </NoResults>
      }
    </FavoritesViewBase>
  )
};

FavoritesView.propTypes = {
  shows: PropTypes.array.isRequired,
  inProgress: PropTypes.bool.isRequired
};

export default FavoritesView;
