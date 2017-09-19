import { put, call, takeLatest, takeEvery } from 'redux-saga/effects';
import { 
  getInitialData,
  getSearchResults,
  getEpisode,
  addShowToRemoteFavorites,
  removeShowFromRemoteFavorites,
  getShowById
} from '../common/api';
import {
  ACTIONS,
  updateInitialData,
  updateSearchResults,
  updateEpisodeData,
  updateShowData
} from '../actions/data';


export function* getInitialDataSaga() {
  try {
    const data = yield call(getInitialData);
    yield put(updateInitialData(data.favoriteEpisodesNext, data.favoriteEpisodesPast, data.favoriteShows));
  } catch (error) {
    throw error;
  }
};

export function* getSearchResultsSaga(action) {
  try {
    const results = yield call(getSearchResults, action.query);
    yield put(updateSearchResults(results));
  } catch (error) {
    throw error;
  }
};

export function* getEpisodeSaga(action) {
  try {
    const episode = yield call(getEpisode, action.url, action.showName);
    yield put(updateEpisodeData(episode));
  } catch (error) {
    throw error;
  }
};

export function* getShowByIdSaga(action) {
  try {
    const show = yield call(getShowById, action.id);
    yield put(updateShowData(show));
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export function* addShowToRemoteFavoritesSaga(action) {
  try {
    yield call(addShowToRemoteFavorites, action.show.id);
  } catch (error) {
    throw error;
  }
};

export function* removeShowFromRemoteFavoritesSaga(action) {
  try {
    yield call(removeShowFromRemoteFavorites, action.show.id);
  } catch (error) {
    throw error;
  }
};

export default function* watchRequest() {
  yield
  yield [
    takeLatest(ACTIONS.RETRIEVE_INITIAL_DATA, getInitialDataSaga),
    takeLatest(ACTIONS.RETRIEVE_SEARCH_RESULTS, getSearchResultsSaga),
    takeEvery(ACTIONS.ADD_SHOW_TO_REMOTE_FAVORITES, addShowToRemoteFavoritesSaga),
    takeEvery(ACTIONS.REMOVE_SHOW_FROM_REMOTE_FAVORITES, removeShowFromRemoteFavoritesSaga),
    takeEvery(ACTIONS.RETRIEVE_EPISODE_DATA, getEpisodeSaga),
    takeEvery(ACTIONS.RETRIEVE_SHOW_DATA, getShowByIdSaga)
  ]
};