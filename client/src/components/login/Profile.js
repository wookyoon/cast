import React, { useState } from 'react';
import {GoogleLogout}  from 'react-google-login';
import LoginStore from '../../store/LoginStore';
import { observer } from 'mobx-react';

const Profile = ({ user, logout }) => {
  const email = localStorage.getItem('email');
  const profilePic = localStorage.getItem('profilePic');
  const name = localStorage.getItem('name');
  const [text, setText] = useState('');
  const handleSubmit = (e) =>{
    e.preventDefault();
    LoginStore.profileCreate(email,name,text);
  }

  return (
    <div className="profile-page">
      <div className="ui centered card">
        <div className="image">
          <img src={profilePic} alt={name} />
        </div>
        <div className="content">
          <div className="ui list">
            <div className="item">
              <i className="users icon"></i>
              <div className="content">{name}</div>
            </div>
            <div className="item">
              <i className="mail icon"></i>
              <div className="content">
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
          </div>
        </div>
        <br/>
        <br/>
        
        <form>
          <label>
            Text:
            <input type="text" name="text" onChange = {(e)=>{setText(e.target.value)}}/>
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
        <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
         buttonText="Logout"
         onLogoutSuccess={logout} />
         <br/>
        <br/>
        <br/>
        {/* <button className="ui inverted secondary button" onClick={logout}>
          Logout
        </button> */}
      </div>
    </div>
  );
};

export default observer(Profile);