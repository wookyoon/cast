import React, {useState} from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { Button } from 'semantic-ui-react';
import ContentStore from '../../store/ContentStore';

function VideoPostCard({video}) {

    return (
        <div className='vid'>
				<div className='title'>
					<h1>{video.category}</h1>
					<h1>{video.title}</h1>
				</div>
				{video.tag.map((tag, i)=>(
                    <p style={{
						color:"white"
					}} key={i} >#{tag}</p>
                ))} 
				<HoverVideoPlayer
				onClick={(e) => {ContentStore.setVideo(video); ContentStore.setModal(true)}}
					videoSrc={video.videoUrl}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={video.imageUrl}
							alt=''
							style={{
								// Make the image expand to cover the video's dimensions
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
						/>
					}
					></HoverVideoPlayer>
				
			</div>
    );
}

export default VideoPostCard;