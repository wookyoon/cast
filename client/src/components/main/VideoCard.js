import React, { useState,useEffect } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ContentStore from '../../store/ContentStore';
import { Button } from 'semantic-ui-react';
import { observer } from 'mobx-react';

const path = process.env.PUBLIC_URL;

function VideoCard({ video }) {
	const [name, setName] = useState(localStorage.getItem("name"));

	const handleLike = (type) => {
		ContentStore.setLike(video._id, type); 
		ContentStore.setVideo(video, "like", type);
	}

	return (
		<div >
			{video.likeUser?.includes(name) ? 
					<Button
					id='btn'
					size='mini'
					color='red'
					content='Like'
					icon='heart'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: video.like
					}}
					onClick={(e) => handleLike("dislike")}
				/> :
				<Button
					id='btn'
					size='mini'
					color='red'
					content='Like'
					icon='heart outline'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: video.like
					}}
					onClick={(e) => handleLike("like")}
				/> 
				}
			<HoverVideoPlayer
			onClick={(e) => {
				ContentStore.setVideo(video, "hit");
				ContentStore.setModal(true);
			}}
				videoSrc={video.videoUrl}
				style={{
					width: '250px',
					height: '250px',
					objectFit: 'cover',
				}}
				restartOnPaused // The video should restart when it is paused
				muted={false}
				pausedOverlay={
					<div id='image'>
						<img
							src={video.imageUrl}
							alt=''
							style={{
								// Make the image expand to cover the video's dimensions
								width: '250px',
								height: '250px',
								objectFit: 'cover',
							}}
						/>
					</div>
				}
			></HoverVideoPlayer>
			<div className='title'>
				<p>{video.category}</p>
				<p>{video.title}</p>
			</div>
		</div>
	);
}

export default observer(VideoCard);
