import React,{useState, useEffect } from 'react';
import ContentStore from '../../store/ContentStore';
import VideoPostCard from './VideoPostCard';
import { Button } from 'semantic-ui-react';
import VideoModal from './VideoModal';

function VideoPostList({videos}) {
    const [isLoading, setLoading] = useState(true);
    const [videoList, setVideoList] = useState(videos);

    useEffect(() => {
    },[]);

    const handleDelete = (video) => {
      if (window.confirm("삭제하시겠습니까?") === true){ 
        console.log(video._id)
        ContentStore.deleteVideoList(video._id).then(()=>{
          setVideoList(ContentStore.deleteVideo(video.title));
          console.log("완료");
        });
      }else{
        console.log("취소");
      }
    }

    return (
		// isLoading ? <p>Loading</p> :
      <>
        <section id='video'>
          {videoList.map((video, idx) => ( 
            <div key = {idx} >
              <VideoPostCard video = {video} />
              {localStorage.getItem("name") === video.name && 
              <Button
                color='black'
                content='Delete'
                onClick={(e) => {handleDelete(video)}}
              />}
            </div>
          ))} 
          <VideoModal />
		  </section>
		</>
    );
}

export default VideoPostList;