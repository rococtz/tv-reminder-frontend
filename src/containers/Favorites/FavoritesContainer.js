import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { removeShowFromFavorites, removeShowFromRemoteFavorites } from '../../actions/data';
import R from 'ramda';

import FavoritesView from './FavoritesView';

const mapStateToProps = (state) => {
  return {
    shows: state.data.favoriteShows,
    inProgress: state.data.requestInProgressInitialData
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeShowFromFavorites: show => {
      const nextEpisodeUrl = R.path(['_links', 'previousepisode', 'href'], show);
      if (nextEpisodeUrl) {
        // TO DO: remove favorite episode from schedule
      }
      const previousEpisodeUrl = R.path(['_links', 'nextepisode', 'href'], show);
      if (previousEpisodeUrl) {
        // TO DO: remove favorite episode from schedule
      }
      dispatch(removeShowFromFavorites(show));
      dispatch(removeShowFromRemoteFavorites(show));
    }
  }
};

const FavoritesContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesView));

export default FavoritesContainer;
