import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { loginRequest } from '../../actions';

import LoginView from './LoginView';

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: () => dispatch(loginRequest())
  }
};

const LoginContainer = withRouter(connect(
  null,
  mapDispatchToProps
)(LoginView));

export default LoginContainer;
