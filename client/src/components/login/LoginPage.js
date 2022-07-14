import React from 'react'
import Login from './Login';
import Profile from './Profile';
import loginStore from '../../store/LoginStore';
import { observer } from 'mobx-react';
import { Navigate, useNavigate  } from 'react-router-dom';


function LoginPage() {
  const navigate = useNavigate();

  const login = (userData) => {
    localStorage.setItem('isLoggedIn',true);
    loginStore.setIsLoggedIn(true);
    loginStore.setUser(userData);
    loginStore.emailValidation();

  };

  const logout = () => {
    localStorage.clear();
    navigate('/');
  };


  return (
    <>
      {!loginStore.emailIsExist ? (
        loginStore.isLoggedIn? (
          <Profile user={loginStore.user} logout={logout} />
           ):
          (<Login login={login}/>)
        ) : (
          <Navigate to='/' />
        )}
    </>
  )
}
export default observer(LoginPage);