import config from '../utils/config';
import AuthService from '../utils/AuthService';

const SEARCH_URL = `https://${config.API_BASE_URL}/search/shows`;
const SHOW_BY_ID_URL = `https://${config.API_BASE_URL}/shows`;
const INITIAL_DATA_URL = `https://${config.BACKEND_BASE_URL}/api/initial-data`;
const FAVORITE_IDS_URL = `https://${config.BACKEND_BASE_URL}/api/favorites`;

export const getInitialData = () => new Promise((resolve, reject) => {
  var token = AuthService.getToken();
  var myHeaders = new Headers();
  myHeaders.set('authorization', `bearer ${token}`);
  myHeaders.set('content-type', 'application/json');
  var request = {
    method: 'GET',
    headers: myHeaders,
  };

  fetch(INITIAL_DATA_URL, request)
    .then(res => res.json())
    .then(resolve);
});

export const getFavoriteIds = () => new Promise((resolve, reject) => {
  var token = AuthService.getToken();
  var myHeaders = new Headers();
  myHeaders.set('authorization', `bearer ${token}`);
  myHeaders.set('content-type', 'application/json');
  var request = {
    method: 'GET',
    headers: myHeaders,
  };

  fetch(FAVORITE_IDS_URL, request)
    .then(res => res.json())
    .then(resolve);
});

export const getShowById = (showId) => new Promise((resolve, reject) => {
  fetch(`${SHOW_BY_ID_URL}/${showId}`)
    .then(res => res.json())
    .then(data => {
      if (data.status >= 400) {
        reject(data);
      } else {
        resolve(data);
      }
    })
    .catch(err => {
      reject(err);
    })
});

export const getSearchResults = (query) => new Promise((resolve, reject) => {
  fetch(`${SEARCH_URL}?q=${query}`)
    .then(res => res.json())
    .then(resolve);
});

export const addShowToRemoteFavorites = showId => new Promise((resolve, reject) => {
  var token = AuthService.getToken();
  var myHeaders = new Headers();
  myHeaders.set('authorization', `bearer ${token}`);
  myHeaders.set('content-type', 'application/json');
  var request = {
    method: 'PUT',
    headers: myHeaders,
  };

  fetch(`${FAVORITE_IDS_URL}/${showId}`, request)
    // .then(res => res.json())
    .then(response => {
      resolve();
    });
});

export const removeShowFromRemoteFavorites = showId => new Promise((resolve, reject) => {
  var token = AuthService.getToken();
  var myHeaders = new Headers();
  myHeaders.set('authorization', `bearer ${token}`);
  myHeaders.set('content-type', 'application/json');
  var request = {
    method: 'DELETE',
    headers: myHeaders,
  };

  fetch(`${FAVORITE_IDS_URL}/${showId}`, request)
    .then(response => {
      resolve();
    });
});


export const getEpisode = (url, showName) => new Promise((resolve, reject) => {
  const episodeFromStorage = window.localStorage.getItem(`TV_REMINDER_EPISODE_${url}`);
  if (episodeFromStorage) {
    resolve(JSON.parse(episodeFromStorage));
  } else {
    fetch(url.replace('http:','https:'))
      .then(res => res.json())
      .then(data => {
        const episode = {
          ...data,
          showName
        }
        window.localStorage.setItem(`TV_REMINDER_EPISODE_${url}`, JSON.stringify(episode))
        resolve(episode);
      });
  }
});