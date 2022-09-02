import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { Button } from 'semantic-ui-react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;
function VidPost() {
	let [modal, setModal] = useState(false);
	return (
		<section id='vidpost'>
			<div className='vid'>
				<div className='title'>
					<a href=''>자유연기</a>
					<h1>공연 낭독</h1>
				</div>
				<a href=''>#독백</a>
				<a href=''>#40대</a>
				<a href=''>#폭발</a>
				<a href=''>#저음</a>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid1.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={`${path}/img/img4.jpg`}
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
			<div className='vid'>
				<div className='title'>
					<a href=''>자유연기</a>
					<h1>영화 독백</h1>
				</div>
				<a href=''>#독백</a>
				<a href=''>#30대</a>
				<a href=''>#광기</a>
				<a href=''>#집착</a>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid4.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={`${path}/img/img7.jpg`}
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
			<div className='vid'>
				<div className='title'>
					<a href=''>특기</a>
					<h1>뮤지컬 노래</h1>
				</div>{' '}
				<a href=''>#20대</a>
				<a href=''>#노래</a>
				<a href=''>#밝음</a>
				<a href=''>#순수</a>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid2.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={`${path}/img/img5.jpg`}
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
					}}></HoverVideoPlayer>{' '}
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
			<div className='vid'>
				<div className='title'>
					<a href=''>특기</a>
					<h1>스턴트</h1>
				</div>{' '}
				<a href=''>#30대</a>
				<a href=''>#무술</a>
				<a href=''>#날렵</a>
				<a href=''>#액션</a>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid3.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={`${path}/img/img6.jpg`}
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
		</section>
	);
}

export default VidPost;
