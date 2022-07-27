import React from 'react';

const path = process.env.PUBLIC_URL;

function Video() {
	return (
		<section id='video'>
			<ul className='popular'>
				<h1>Popular</h1>
				<li>
					<video src={`${path}/vid/vid1.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid2.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid3.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid4.mp4`} loop autoPlay muted></video>
				</li>
			</ul>
			<ul className='play'>
				<h1>Play</h1>
				<li>
					<video src={`${path}/vid/vid5.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid6.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid7.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid8.mp4`} loop autoPlay muted></video>
				</li>
			</ul>
			<ul className='sing'>
				<h1>Sing</h1>
				<li>
					<video src={`${path}/vid/vid9.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid10.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid11.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid12.mp4`} loop autoPlay muted></video>
				</li>
			</ul>
			<ul className='show'>
				<h1>Show</h1>
				<li>
					<video src={`${path}/vid/vid13.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid14.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid15.mp4`} loop autoPlay muted></video>
				</li>
				<li>
					<video src={`${path}/vid/vid16.mp4`} loop autoPlay muted></video>
				</li>
			</ul>
		</section>
	);
}

export default Video;
