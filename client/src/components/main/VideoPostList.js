import React,{useState, useEffect } from 'react';
import ContentStore from '../../store/ContentStore';
import VideoPostCard from './VideoPostCard';

function VideoPostList() {
    const [isLoading, setLoading] = useState(true);
    const [videoList, setVideoList] = useState();

	useEffect(() => {
      ContentStore.getVideoList('mypage', localStorage.getItem('name')).then(()=>{
        setLoading(false);
        setVideoList(ContentStore.videos)
      })
    },[]);
    return (
		isLoading ? <p>Loading</p> :
        <>
        <section id='vidpost'>
			{videoList.map((video, idx) => ( 
                <VideoPostCard video = {video} key = {idx} />
                // video.title
            ))}
		</section>
		</>
    );
}

export default VideoPostList;