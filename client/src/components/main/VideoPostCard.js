import React, {useState} from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { Button } from 'semantic-ui-react';
import ContentStore from '../../store/ContentStore';
import { observer } from 'mobx-react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { useNavigate } from 'react-router-dom';

function VideoPostCard({video}) {
	const [name, setName] = useState(localStorage.getItem("name"));
    const navigate = useNavigate();

	const handleLike = (type) => {
		ContentStore.setLike(video._id, type); 
		ContentStore.setVideo(video, "like", type);
	}

	const handleNavigate = () =>{
		
		navigate(0)
	}
    return (
        <div className='vid'>
			<div className='id' onClick={()=>navigate('/userpage/?user='+ video.name)}>
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
				ContentStore.setVideo(video);
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
			<div className='tag'>
				{video.tag.map((tag, i) => (
					<h4 key={i}>#{tag}</h4>
				))}
			</div>
		</div>
    );
}

export default observer(VideoPostCard);