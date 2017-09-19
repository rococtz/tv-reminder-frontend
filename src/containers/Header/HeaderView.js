import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import AuthService from '../../utils/AuthService'
import {
  AppBarStyled,
  ButtonStyled,
  LinkStyled
} from './styles';

const Header = ({ authService, history, isAuthenticated, profile, error, loginRequest, logoutSuccess }) =>
  <div>
    {
      isAuthenticated &&
      <div>
        <AppBarStyled position="static">
          <Toolbar>
            <LinkStyled to='/search'>
              <Button color="contrast">Search</Button>
            </LinkStyled>
            <LinkStyled to='/favorites'>
              <Button color="contrast">Favorites</Button>
            </LinkStyled>
            <LinkStyled to='/schedule'>
              <Button color="contrast">Schedule</Button>
            </LinkStyled>
            <ButtonStyled color="contrast"
              onClick={() => {
                logoutSuccess()
                AuthService.logout() // careful, this is a static method
                history.push({ pathname: '/' })
              }}> Logout </ButtonStyled>
          </Toolbar>
        </AppBarStyled>
      </div>
    }
  </div>

Header.propTypes = {
  authService: PropTypes.object.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  profile: PropTypes.object,
  error: PropTypes.string,
  loginRequest: PropTypes.func.isRequired,
  logoutSuccess: PropTypes.func.isRequired
}

export default Header
