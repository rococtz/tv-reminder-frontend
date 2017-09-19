import React from 'react';
import { ButtonStyled, LoginViewBase } from './styles';

const LoginView = ({ authService, loginRequest }) => {
  return (
    <LoginViewBase>
      <ButtonStyled raised dense color="contrast"
        onClick={() => {
          authService.login()
          loginRequest()
        }}>
        Login
      </ButtonStyled>
    </LoginViewBase>
  );
}

export default LoginView;
