import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import R from 'ramda';
import {
  getSearchResults,
  addShowToFavorites,
  addShowToRemoteFavorites,
  removeShowFromFavorites,
  removeShowFromRemoteFavorites,
  getEpisode
} from '../../actions/data';
import SearchView from './SearchView'

const mapDispatchToProps = (dispatch, state) => {
  return {
    getSearchResults: query => {
      dispatch(getSearchResults(query));
    },
    addShowToFavorites: show => {
      const nextEpisodeUrl = R.path(['_links', 'previousepisode', 'href'], show);
      if (nextEpisodeUrl) {
        dispatch(getEpisode(nextEpisodeUrl, show.name));
      }
      const previousEpisodeUrl = R.path(['_links', 'nextepisode', 'href'], show);
      if (previousEpisodeUrl) {
        dispatch(getEpisode(previousEpisodeUrl, show.name));
      }
      dispatch(addShowToFavorites(show));
      dispatch(addShowToRemoteFavorites(show));
    },
    removeShowFromFavorites: show => {
      const nextEpisodeUrl = R.path(['_links', 'previousepisode', 'href'], show);
      if (nextEpisodeUrl) {
        // dispatch(getEpisode(nextEpisodeUrl));
      }
      const previousEpisodeUrl = R.path(['_links', 'nextepisode', 'href'], show);
      if (previousEpisodeUrl) {
        // dispatch(getEpisode(previousEpisodeUrl));
      }
      dispatch(removeShowFromFavorites(show));
      dispatch(removeShowFromRemoteFavorites(show));
    }
  };
};

const mapStateToProps = state => ({
  results: state.data.results,
  favoriteShows: state.data.favoriteShows
});

const SearchContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchView));

export default SearchContainer;



