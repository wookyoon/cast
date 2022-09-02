import React, {useState} from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { Button } from 'semantic-ui-react';

function VideoPostCard({video}) {
    let [modal, setModal] = useState(false);

    return (
        <div className='vid'>
				<div className='title'>
					<h1>{video.category}</h1>
					<h1>{video.title}</h1>
				</div>
				{video.tag.map((tag, i)=>(
                    <p key={i} >#{tag}</p>
                ))} 
				<HoverVideoPlayer
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>
				<Button
					color='red'
					content='Like'
					icon='heart'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: '2,048',
					}}
				/>
			</div>
    );
}

export default VideoPostCard;