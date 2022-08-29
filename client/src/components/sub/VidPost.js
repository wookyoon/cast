import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
const path = process.env.PUBLIC_URL;
function VidPost() {
	let [modal, setModal] = useState(false);
	return (
		<section id='vidpost'>
			{' '}
			<div className='vid'>
				<h1>자유연기</h1>
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
			</div>
			<div className='vid'>
				<h1>자유연기2</h1>
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
			</div>
			<div className='vid'>
				<h1>특기</h1>
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
					}}></HoverVideoPlayer>
			</div>
			<div className='vid'>
				<h1>특기2</h1>
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
			</div>
		</section>
	);
}

export default VidPost;
