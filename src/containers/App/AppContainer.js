import { connect } from 'react-redux';
import { loginSuccess, loginError } from '../../actions';
import { getShowById, addShowToFavorites, getEpisode } from '../../actions/data';
import { withRouter } from 'react-router';

import AppView from './AppView'

const mapDispatchToProps = (dispatch) => {
  return {
    loginSuccess: (profile) => dispatch(loginSuccess(profile)),
    loginError: (error) => dispatch(loginError(error)),
    getShowById: (id) => dispatch(getShowById(id)),
    addShowToFavorites: (show) => dispatch(addShowToFavorites(show)),
    getEpisode: (url, showName) => dispatch(getEpisode(url, showName))
  }
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
};

const AppContainer = withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(AppView));

export default AppContainer;
