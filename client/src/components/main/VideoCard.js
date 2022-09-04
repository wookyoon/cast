import React,{useEffect, useState} from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ContentStore from '../../store/ContentStore';
import { Button } from 'semantic-ui-react';

import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
const path = process.env.PUBLIC_URL;

function VideoCard({video}) {
	const [like, setLike] = useState(video.likeUser?.includes(localStorage.getItem("name")))
	const [likeNum, setLikeNum] = useState(video.like)

	useEffect(() => {
	}, []);

    return (
		<div className='vid' >
				<HoverVideoPlayer
				onClick={(e) => {ContentStore.setVideo(video); ContentStore.setModal(true)}}
					videoSrc={video.videoUrl}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={video.imageUrl}
								alt=''
								style={{
									// Make the image expand to cover the video's dimensions
									width: '219.25px',
									height: '400px',
									objectFit: 'cover',
								}}
							/>
							<div className='id'>
								<Chip
									avatar={<Avatar alt='Natacha' src={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${video.name}.jpeg`}  />}
									label={video.name}
								/>
							</div>

							<div className='title'>
								<p>{video.category}</p>
								<h1>{video.title}</h1>
							</div>
							<div className='tag'>
							{video.tag.map((tag, i)=>(
                                    <h2 key={i} >#{tag}</h2>
                                ))} 
							</div>
						</div>
					}
					>
					</HoverVideoPlayer>

					{ like ? 
					<Button
					color='red'
					content='Like'
					icon='heart'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: likeNum
					}}
					onClick={(e) => {ContentStore.setLike(video._id, "dislike"); setLike(!like); setLikeNum(likeNum-1)}}
				/> :
				<Button
					color='red'
					content='Like'
					icon='heart outline'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: likeNum
					}}
					onClick={(e) => {ContentStore.setLike(video._id, "like"); setLike(!like); setLikeNum(likeNum+1)}}
				/> 
				}
			</div>
    );
}

export default VideoCard;