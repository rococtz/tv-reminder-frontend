import { ACTIONS } from '../actions/data';
import R from 'ramda';

const initialState = {
  requestInProgressInitialData: false,
  requestInProgressEpisode: false,
  favoriteEpisodesNext: [],
  favoriteEpisodesPast: [], 
  favoriteNextEpisodesIds: [],
  favoritePastEpisodesIds: [],
  favoriteShows: [],
  shows: [],
  episodes: [],
  results: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case ACTIONS.RETRIEVE_INITIAL_DATA:
      return {
        ...state,
        requestInProgressInitialData: true
      }

    case ACTIONS.UPDATE_INITIAL_DATA:
      return {
        ...state,
        favoriteEpisodesNext: action.favoriteEpisodesNext,
        favoriteEpisodesPast: action.favoriteEpisodesPast,
        favoriteShows: action.favoriteShows,
        requestInProgressInitialData: false
      }
    
    case ACTIONS.UPDATE_SEARCH_RESULTS_SUCCESS:
      return {
        ...state,
        results: action.results
      }

    case ACTIONS.ADD_SHOW_TO_FAVORITES:
      return {
        ...state,
        favoriteShows: [...state.favoriteShows, action.show]
      }
    
    case ACTIONS.REMOVE_SHOW_FROM_FAVORITES:
      const filteredShows = R.filter(
        show => show.id !== action.show.id,
        state.favoriteShows
      );
      return {
        ...state,
        favoriteShows: [...filteredShows]
      }

    case ACTIONS.RETRIEVE_EPISODE_DATA:
      return {
        ...state
      }

    case ACTIONS.UPDATE_EPISODE_DATA:
      const episodeDate = new Date(action.episode.airstamp);
      const favoriteEpisodeProperty = episodeDate > (new Date()) ? 'favoriteEpisodesNext' : 'favoriteEpisodesPast';
      return {
        ...state,
        [favoriteEpisodeProperty]: [...state[favoriteEpisodeProperty], action.episode]
      }
    
    case ACTIONS.UPDATE_SHOW_DATA:
      return {
        ...state,
        favoriteShows: [...state.favoriteShows, action.show]
      }

    default:
      return state
  }
}

export const getShowById = id => ({
  type: ACTIONS.RETRIEVE_SHOW_DATA,
  id
});

export const updateShowData = show => ({
  type: ACTIONS.UPDATE_SHOW_DATA,
  show
});