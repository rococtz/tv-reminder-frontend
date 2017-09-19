import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import R from 'ramda';
import HeaderContainer from '../Header/HeaderContainer';
import LoginContainer from '../Login/LoginContainer';
import CallbackPage from '../../components/CallbackPage/CallbackPage';
import AuthService from '../../utils/AuthService'
import SearchContainer from '../Search/SearchContainer';
import FavoritesContainer from '../Favorites/FavoritesContainer';
import ScheduleContainer from '../Schedule/ScheduleContainer';
import authHOC from '../../common/authHOC';
import { getFavoriteIds, getShowById } from '../../common/api';
import { AppViewBase } from './styles';

const loadInitialData = (props) => {
  getFavoriteIds().then(ids => {
    ids.forEach(id => {
      getShowById(id)
        .then(show => {
          props.addShowToFavorites(show);
          const nextEpisodeUrl = R.path(['_links', 'nextepisode', 'href'], show);
          if (nextEpisodeUrl) {
            props.getEpisode(nextEpisodeUrl, show.name);
          }
          const previousEpisodeUrl = R.path(['_links', 'previousepisode', 'href'], show);
          if (previousEpisodeUrl) {
            props.getEpisode(previousEpisodeUrl, show.name);
          }
        })
        .catch(console.log);
    });
  })
    .catch(console.log);
};
class App extends React.Component {

  authService = new AuthService()

  componentWillMount() {
    // Add callback for lock's `authenticated` event
    this.authService.lock.on('authenticated', (authResult) => {
      this.authService.lock.getProfile(authResult.idToken, (error, profile) => {
        if (error) {
          return this.props.loginError(error);
        }
        AuthService.setToken(authResult.idToken);
        AuthService.setProfile(profile);
        this.props.loginSuccess(profile);
        loadInitialData(this.props);
        return this.props.history.push({ pathname: '/' })
      });
    });
    // Add callback for lock's `authorization_error` event
    this.authService.lock.on('authorization_error', (error) => {
      this.props.loginError(error)
      return this.props.history.push({ pathname: '/' })
    });
    if (this.props.isAuthenticated) {
      loadInitialData(this.props);
    }
  }

  render() {
    return (
      <AppViewBase>
        <HeaderContainer authService={this.authService} />
        <Switch>
          <Route exact path="/" component={() => <CallbackPage history={this.props.history} />} />
          <Route exact path="/schedule" component={
            authHOC(ScheduleContainer, this.props.isAuthenticated, this.props.history)
          } />
          <Route path="/search" component={
            authHOC(SearchContainer, this.props.isAuthenticated, this.props.history)
          } />
          <Route path="/favorites" component={
            authHOC(FavoritesContainer, this.props.isAuthenticated, this.props.history)
          } />
          <Route path="/login" component={(props) => {
            return (
              <LoginContainer
                authService={this.authService}
                {...props}
              />
            );
          }} />
        </Switch>
      </AppViewBase>
    )
  }
}

App.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  loginSuccess: PropTypes.func.isRequired,
  loginError: PropTypes.func.isRequired
}

export default App
