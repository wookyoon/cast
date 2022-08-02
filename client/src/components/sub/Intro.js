import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;

function Intro() {
	return (
		<section id='intro'>
			<div className='vid'>
				<video src={`${path}/vid/vid1.mp4`} loop autoPlay muted></video>
			</div>
			<div className='info'>
				<h1>name</h1>
				<h1>job</h1>
				<a>
					<FontAwesomeIcon icon={faLocationDot} />
				</a>
				<h2>comment</h2>
				<p>story</p>
			</div>
			<div className='stat'>
				<div className='profile'>
					<img src={`${path}/img/img1.jpg`} alt='' />
					<h1>id</h1>
				</div>
				<div className='repute'>
					<div className='follow'>
						<h1>
							{' '}
							<FontAwesomeIcon icon={faBookmark} />
						</h1>
						<h1>900</h1>
					</div>
					<div className='reviews'>
						<h1>Reviews</h1>
						<h1>4.5</h1>
					</div>
				</div>
				<div className='tags'>
					<h1>#actor</h1>
					<h1>#play</h1>
					<h1>#voice</h1>
					<h1>#film</h1>
				</div>
			</div>
		</section>
	);
}

export default Intro;
