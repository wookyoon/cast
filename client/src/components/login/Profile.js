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
  const [profilePic, setProfilePic] =useState('');
  const [profilePicName, setProfilePicName] =useState('');
  const [introVideo, setIntroVideo] =useState('');
  const [introVideoName, setIntroVideoName] =useState('');
  const [introImage, setIntroImage] =useState('');
  const [introImageName, setIntroImageName] =useState('');
  const [name, setName] = useState('');
  const [insta, setInsta] = useState("");
  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [info, setTeam] = useState('');
  const [team, setInfo] = useState();
  const [height, setHeight] = useState();
  const [weight, setWeight] = useState();
  const [specialty, setSpecialty] = useState();
  const [career, setCareer] = useState();
  const [youtubeLink, setYoutubeLink] = useState();
  const navigate = useNavigate();


  const onProfilePicDrop = (files) => {
    setProfilePic(files[0]);
    setProfilePicName(files[0].name);
  }

  const onIntroVideoDrop = (files) => {
    setIntroVideo(files[0]);
    setIntroVideoName(files[0].name);
  }

  const onIntroImageDrop = (files) => {
    setIntroImage(files[0]);
    setIntroImageName(files[0].name);
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
      
      const data = {
        name : name,
        email : localStorage.getItem('email'),
        tag : ContentStore.tags,
        imgUrl:'https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/' + name+'.jpeg',
        team : team,
        height : height,
        weight : weight,
        sns : {
          insta:insta,
          facebook:facebook,
          youtube:youtube
        },
        youtube : youtubeLink,
        specialty : specialty,
        career : career,
        info : info,
        videoUrl:"https://mern-feedback.s3.ap-northeast-2.amazonaws.com/"+name+"/videos/intro.mp4",
        imageUrl:"https://mern-feedback.s3.ap-northeast-2.amazonaws.com/"+name+"/images/intro.jpeg",
    }
    console.log(data)
    // video create 추가
      LoginStore.profileCreate(data).then((result)=>{
        if(result === "exist"){
          return alert( '중복된 이름입니다.');
        }else{
          const profilePicUpload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: 'mern-feedback', 
                Key:  'profileImg/'+name + ".jpeg", 
                Body: profilePic,
                ACL: "public-read",
                ContentType:'image/jpeg'
            }
        });
        const introVideoUpload = new AWS.S3.ManagedUpload({
          params: {
              Bucket: 'mern-feedback', 
              Key:  name +"/videos/intro.mp4", 
              Body: introVideo,
              ACL: "public-read",
              ContentType:'video/mp4'
          }
      });
      const introImageUpload = new AWS.S3.ManagedUpload({
        params: {
            Bucket: 'mern-feedback', 
            Key:  name +"/images/intro.jpeg",
            Body: introImage,
            ACL: "public-read",
            ContentType:'image/jpeg'
        }
    });
        
        profilePicUpload.promise();
        introVideoUpload.promise();
        introImageUpload.promise();
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
                onDrop={onProfilePicDrop}
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
          <Dropzone
                onDrop={onIntroVideoDrop}
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
            <label>
            Profile Video:
            {introVideoName}
          </label>
            <Dropzone
                onDrop={onIntroImageDrop}
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
            <label>
            Profile Video Thumbnail:
            {introImageName}
          </label>
          <br/>
          <label>
            Name:
            <input type="text" name="text" onChange = {(e)=>{setName(e.target.value)}}/>
          </label>
          <br/>

          <label>
            SNS:
            <input placeholder="instagram" type="text" name="text" onChange = {(e)=>{setInsta( e.target.value)}}/>
            <input placeholder="facebook" type="text" name="text" onChange = {(e)=>{setFacebook( e.target.value)}}/>
            <input placeholder="youtube" type="text" name="text" onChange = {(e)=>{setYoutube( e.target.value)}}/>
          </label>
          <br/>

          <label>
            Info:
            <input type="text" name="text" onChange = {(e)=>{setInfo(e.target.value)}}/>
          </label>
          <br/>

          <label>
            Team:
            <input type="text" name="text" onChange = {(e)=>{setTeam(e.target.value)}}/>
          </label>
          <br/>

          {/* <label>
            Birth:
            <input palceholer="" type="text" name="text" onChange = {(e)=>{setInfo(e.target.value)}}/>
          </label>
          <br/> */}

          <label>
            Height:
            <input type="text" name="text" onChange = {(e)=>{setHeight(e.target.value)}}/>
          </label>
          <br/>
          <label>
            Weight:
            <input type="text" name="text" onChange = {(e)=>{setWeight(e.target.value)}}/>
          </label>
          <br/>

          <label>
            Specialty:
            <input type="text" name="text" onChange = {(e)=>{setSpecialty(e.target.value)}}/>
          </label>
          <br/>

          <label>
            Career:
            <input type="text" name="text" onChange = {(e)=>{setCareer(e.target.value)}}/>
          </label>
          <br/>

          <label>
            YoutubeLink:
            <input type="text" name="text" onChange = {(e)=>{setYoutubeLink(e.target.value)}}/>
          </label>
          <br/>

          <label>Tags:
                <TagSearch  />
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