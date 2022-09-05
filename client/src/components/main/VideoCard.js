import React, { useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ContentStore from '../../store/ContentStore';
import { Button } from 'semantic-ui-react';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
const path = process.env.PUBLIC_URL;

function VideoCard({ video }) {
	const [currentVideo, setCurrentVideo] = useState();

	const handleModal = () => {
		setCurrentVideo(video);
		ContentStore.setModal(true);
		ContentStore.setVideo(video);
	};
	return (
		<div
			className='vid'
			onClick={(e) => {
				ContentStore.setVideo(video);
				ContentStore.setModal(true);
			}}>
			<div className='id'>
				<Chip
					avatar={
						<Avatar
							alt='Natacha'
							src={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${video.name}.jpeg`}
						/>
					}
					label={video.name}
				/>
			</div>{' '}
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
					content: video.like,
				}}
			/>
			<HoverVideoPlayer
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
				// onClick={() => {
				// 	setModal(!modal);
				// }}
			></HoverVideoPlayer>
			<div className='title'>
				<p>{video.category}</p>
				<p>{video.title}</p>
			</div>
			<div className='tag'>
				{video.tag.map((tag, i) => (
					<h2 key={i}>#{tag}</h2>
				))}
			</div>
		</div>
	);
}

export default VideoCard;
