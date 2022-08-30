import React, { useState, useEffect } from 'react';
import {GoogleLogout}  from 'react-google-login';
import LoginStore from '../../store/LoginStore';
import { observer } from 'mobx-react';
import Dropzone from 'react-dropzone';
import {PlusOutlined} from '@ant-design/icons'
import AWS from "aws-sdk";
import TagSearch from '../content/TagSearch';
import TagApi from "../../api/TagApi";
import { useNavigate } from 'react-router';
import ContentStore from '../../store/ContentStore';

const Profile = ({ logout }) => {
  const email = localStorage.getItem('email');
  const [profilePic, setProfilePic] =useState('');
  const [profilePicName, setProfilePicName] =useState('');
  const [name, setName] = useState('');
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [info, setInfo] = useState('');
  const [dbtags, setDBTags] = useState();
  const navigate = useNavigate();

  useEffect( () => {
    TagApi.getTags().then(
        function (result) {
            setDBTags(result.tags);
        }
    )
}, []);

  const onDrop = (files) => {
    setProfilePic(files[0]);
    setProfilePicName(files[0].name);
}

  const handleSubmit = async (e) =>{
    e.preventDefault();
    if (!name || !profilePic || ContentStore.getTags().length===0) {
      return alert('fill all the fields(Name, profilePic, Tags) first!')
    }

    if(profilePicName.split(".")[1]==="jpg" || profilePicName.split(".")[1]==="jpeg"){
            
    }else{
    return alert('jpg or jpeg 파일만 가능합니다.')
    }
    AWS.config.update({
        region: "ap-northeast-2",
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    if(nameTest()){
      
      let url = 'https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/' + name+'.jpeg';
      
      LoginStore.profileCreate(email,name,url,insta,facebook,youtube,info).then((result)=>{
        if(result === "exist"){
          return alert( '중복된 이름입니다.');
        }else{
          const upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: 'mern-feedback', 
                Key:  'profileImg/'+name + ".jpeg", 
                Body: profilePic,
                ACL: "public-read",
                ContentType:'image/jpeg'
            }
        });
        
        const promise = upload.promise();
        navigate('/')
        }
      })
      
        }
  }

  
  const nameTest = () =>{
    var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
    var blank_pattern = /[\s]/g;
    if(special_pattern.test(name) === true){
      return alert('특수문자가 입력되었습니다.');
    }else if( blank_pattern.test(name) === true){
      return alert('공백이 입력되었습니다.');
    }else{
      return true;
    }
  }

  return (
    <div className="profile-page">
      
      <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000}
            >
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '300px', height: '240px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                        {...getRootProps()}
                    >
                        <input {...getInputProps()} />
                        <PlusOutlined tyle={{ fontSize: '3rem' }} />
                    </div>
                )}
            </Dropzone>

        <form>
          <label>
            Profile Image:
            {profilePicName}
          </label>
          <br/>
          <label>
            Name:
            <input type="text" name="text" onChange = {(e)=>{setName(e.target.value)}}/>
          </label>
          <label>
            SNS:
            <input placeholder="instagram" type="text" name="text" onChange = {(e)=>{setInsta( e.target.value)}}/>
            <input placeholder="facebook" type="text" name="text" onChange = {(e)=>{setFacebook( e.target.value)}}/>
            <input placeholder="youtube" type="text" name="text" onChange = {(e)=>{setYoutube( e.target.value)}}/>
          </label>
          <label>
            Info:
            <input type="text" name="text" onChange = {(e)=>{setInfo(e.target.value)}}/>
          </label>
          <br/>

          <label>Tags:
                <TagSearch  dbtags={dbtags}/>
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit}/>
        </form>
        <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
         buttonText="Logout"
         onLogoutSuccess={logout} />
      </div>
  );
};

export default observer(Profile);