export const ACTIONS = {
    UPDATE_FAVORITE_SHOWS_SUCCESS: 'UPDATE_FAVORITE_SHOWS_SUCCESS',
    RETRIEVE_FAVORITE_SHOWS: 'RETRIEVE_FAVORITE_SHOWS',
    RETRIEVE_INITIAL_DATA: 'RRETRIEVE_INITIAL_DATA',
    UPDATE_INITIAL_DATA: 'UPDATE_INITIAL_DATA',
    UPDATE_SEARCH_RESULTS_SUCCESS: 'UPDATE_SEARCH_RESULTS_SUCCESS',
    RETRIEVE_SEARCH_RESULTS: 'RETRIEVE_SEARCH_RESULTS',
    ADD_SHOW_TO_FAVORITES: 'ADD_SHOW_TO_FAVORITES',
    ADD_SHOW_TO_REMOTE_FAVORITES: 'ADD_SHOW_TO_REMOTE_FAVORITES',
    REMOVE_SHOW_FROM_FAVORITES: 'REMOVE_SHOW_FROM_FAVORITES',
    REMOVE_SHOW_FROM_REMOTE_FAVORITES: 'REMOVE_SHOW_FROM_REMOTE_FAVORITES',
    RETRIEVE_EPISODE_DATA: 'RETRIEVE_EPISODE_DATA',
    UPDATE_EPISODE_DATA: 'UPDATE_EPISODE_DATA',
    RETRIEVE_SHOW_DATA: 'RETRIEVE_SHOW_DATA',
    UPDATE_SHOW_DATA: 'UPDATE_SHOW_DATA'
  };
  
  export const retrieveInitialData = () => {
    return {
      type: ACTIONS.RETRIEVE_INITIAL_DATA,
    }
  };
  
  export const updateInitialData = (favoriteEpisodesNext, favoriteEpisodesPast, favoriteShows) => {
    return {
      type: ACTIONS.UPDATE_INITIAL_DATA,
      favoriteEpisodesNext,
      favoriteEpisodesPast,
      favoriteShows
    }
  };
  
  export const getSearchResults = (query) => {
    return {
      type: ACTIONS.RETRIEVE_SEARCH_RESULTS,
      query
    }
  };
  
  export const updateSearchResults = results => ({
    type: ACTIONS.UPDATE_SEARCH_RESULTS_SUCCESS,
    results
  });
  
  export const addShowToFavorites = show => {
    return {
      type: ACTIONS.ADD_SHOW_TO_FAVORITES,
      show
    }
  };

  export const addShowToRemoteFavorites = show => {
    return {
      type: ACTIONS.ADD_SHOW_TO_REMOTE_FAVORITES,
      show
    }
  };
  
  export const removeShowFromFavorites = show => {
    return {
      type: ACTIONS.REMOVE_SHOW_FROM_FAVORITES,
      show
    }
  };

  export const removeShowFromRemoteFavorites = show => {
    return {
      type: ACTIONS.REMOVE_SHOW_FROM_REMOTE_FAVORITES,
      show
    }
  };

  export const getEpisode = (url, showName) => {
    return {
      type: ACTIONS.RETRIEVE_EPISODE_DATA,
      url,
      showName
    }
  };
  
  export const updateEpisodeData = episode => ({
    type: ACTIONS.UPDATE_EPISODE_DATA,
    episode
  });

  export const getShowById = id => ({
    type: ACTIONS.RETRIEVE_SHOW_DATA,
    id
  });

  export const updateShowData = show => ({
    type: ACTIONS.UPDATE_SHOW_DATA,
    show
  });