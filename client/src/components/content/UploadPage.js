import React, { useState, useEffect  } from 'react';
import { Typography, Button, Form, Input } from 'antd';
import ContentStore from '../../store/ContentStore';
import LoginStore from '../../store/LoginStore';
import AWS from "aws-sdk";
import Dropzone from 'react-dropzone';
import {PlusOutlined} from '@ant-design/icons'
import TageSearch from './TageSearch';
import TagApi from "../../api/TagApi";

const { Title } = Typography;

function UploadPage() {
    const [title, setTitleValue] = useState("")
    const [Video, setVideo] = useState()
    const [VideoName, setVideoName] = useState("")
    const [VideoSize, setVideoSize] = useState()
    const [VideoDuration, setVideoDuration] = useState()
    const [dbtags, setDBTags] = useState();

    useEffect( () => {
        TagApi.getTags("video").then(
            function (result) {
                setDBTags(result.tags);
            }
        )
        ContentStore.getVideoListByEmail();
        // ContentStore.getVideoListByTag("건반");
    }, []);

    const titleTest = () =>{
        if(title.search(/\W|\s/g) > -1){
            return true;
        }else{
          return false;
        }
    }
    const region = "ap-northeast-2";
    
    AWS.config.update({
        region: region,
        accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
    });

    const onSubmit = async (event) => {
        event.preventDefault();

        if (!title || !Video || ContentStore.getTags().length===0) {
            return alert('fill all the fields first!')
        }

        if(titleTest()){
            return alert( '특수문자 또는 공백이 입력되었습니다.');
        }
        
        if(VideoSize > 5000000){
            return alert("동영상 사이즈가 5MB이상입니다")
        } else if(VideoDuration > 60){
            return alert("동영상 길이가 1분 이상입니다")
        }else{
            ContentStore.setTitle(title);
            ContentStore.setUser(localStorage.getItem('name')); 
            // console.log("##",await ContentStore.titleValidation());
            if(!(await ContentStore.titleValidation())){
                console.log("###")
                ContentStore.setUrl("https://mern-feedback.s3.ap-northeast-2.amazonaws.com/videos/"+localStorage.getItem('name')+'/'+title);
                //    ContentStore.contentUpload();
                        const upload = new AWS.S3.ManagedUpload({
                            params: {
                                Bucket: 'mern-feedback', 
                                Key:  'videos/'+localStorage.getItem('name')  + '/'+title+ ".mp4", 
                                Body: Video, 
                                ACL: "public-read",
                                ContentType:'video/mp4'
                            }
                        });
    
                        
                        const promise = upload.promise();
                        promise.then(
                            (data) => {
                                ContentStore.setUrl(data.Location);
                                ContentStore.contentUpload();
                            }
                        );
                    
                    }else{
                return alert( '동일한 Title이 존재합니다.');
            }
        }
    }

    const onGet = () => {
        // console.log(ContentStore.videosbyemail);
        // console.log(ContentStore.videosbytag);
    }

    const onDrop = (file) => {
        setVideo(file[0]);
        setVideoName(file[0].name)
        setVideoSize(file[0].size);
        

        Object.assign(file[0], {
            preview: URL.createObjectURL(file[0])
        });
    
        const video = document.createElement("video");
        video.src = file[0].preview;
        video.addEventListener("loadedmetadata", () => {
            setVideoDuration(video.duration);
        });
        //  1903312 == 1.9mb
    }

    return (
       <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2}> Upload Travel Product</Title>
            </div>


            <Form onSubmit={onSubmit} >

            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={55000000}
            >
              
                {({ getRootProps, getInputProps, isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => (
                    
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

            <div style={{ display: 'flex', width: '350px', height: '240px'}}>
                    {VideoName}
                    <br/>
                    {VideoSize}
                    <br/>
                    {VideoDuration}
            </div>

        </div>

                <br />
                <br />
                <label>Title</label>
                <Input
                    onChange = {(e)=>{setTitleValue(e.target.value);}}
                    value={title}
                />
                <br />
                <br />
                <label>Tags</label>
                <TageSearch type={"video"} dbtags={dbtags}/>
                <br />
                <br />

                <Button  onClick={onSubmit} >
                    Submit
                </Button>

                <Button  onClick={onGet} >
                    Get
                </Button>

            </Form>
            
            <video controls>
                <source src='https://feedback-resized.s3.ap-northeast-2.amazonaws.com/videos/y3/y50.mp4'></source>
            </video>
        </div>
    );
}

export default UploadPage;