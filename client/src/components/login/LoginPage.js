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
    loginStore.emailValidation(localStorage.getItem('email'));
  };

  const logout = () => {
    loginStore.isLoggedIn=false
    console.log(loginStore.isLoggedIn)
    localStorage.clear();
    navigate('/');
  };


  return (
    <>
      {loginStore.isLoggedIn ? (
        !(loginStore.emailIsExist === "exist") ? (
          <Profile logout={logout} />
           ):
          (<Navigate to='/' />)
        ) : (
          <Login login={login}/>
        )}
    </>
  )
}
export default observer(LoginPage);