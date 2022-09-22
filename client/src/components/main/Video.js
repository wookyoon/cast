import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';
// import VidModal from './VidModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;

function Video() {
	let [modal, setModal] = useState(false);
	return (
		<section id='video'>
			<div className='category'>
				<ul>
					<li>
						<h1>전체보기</h1>
					</li>
					<li>
						<h1>자기소개</h1>
					</li>
					<li>
						<h1>자유연기</h1>
					</li>
					<li>
						<h1>특기</h1>
					</li>
					<li>
						<h1>최신순</h1>
					</li>
					<li>
						<h1>인기순</h1>
					</li>
				</ul>
			</div>
			<div className='tags'>
				<ul>
					<li>
						<h1>추천태그</h1>
					</li>
					<li>
						<a href=''>독백</a>
					</li>
					<li>
						<a href=''>노래</a>
					</li>
					<li>
						<a href=''>냉정</a>
					</li>
					<li>
						<a href=''>순수</a>
					</li>
					<li>
						<a href=''>광기</a>
					</li>
					<li>
						<a href=''>사투리</a>
					</li>
				</ul>
			</div>
			<div className='vid'>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid5.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img8.jpg`}
								alt=''
								style={{
									// Make the image expand to cover the video's dimensions
									width: '260px',
									height: '260px',
									objectFit: 'cover',
								}}
							/>
							<div className='id'>
								<Chip
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>자유연기</a>
								<h1>장면 연기</h1>
							</div>
							<div className='tag'>
								<a href=''>마초</a>
								<a href=''>거친</a>
								<a href=''>허스키</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid6.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img2.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>자유연기</a>
								<h1>오디션 독백</h1>
							</div>
							<div className='tag'>
								<a href=''>독백</a>
								<a href=''>10대</a>
								<a href=''>소년</a>
								<a href=''>연약</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid7.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img1.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>자유연기</a>
								<h1>영화 연기 </h1>
							</div>
							<div className='tag'>
								<a href=''>중년</a>
								<a href=''>젠틀</a>
								<a href=''>강직</a>
								<a href=''>저음</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid0.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img3.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>자기소개</a>
								<h1>청년배우</h1>
							</div>
							<div className='tag'>
								<a href=''>20대</a>
								<a href=''>마른</a>
								<a href=''>소년</a>
								<a href=''>여린</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid2.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img5.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>특기</a>
								<h1>뮤지컬 노래</h1>
							</div>
							<div className='tag'>
								<a href=''>20대</a>
								<a href=''>노래</a>
								<a href=''>맑은</a>
								<a href=''>긍정</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid3.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img6.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>특기</a>
								<h1>액션 스턴트</h1>
							</div>
							<div className='tag'>
								<a href=''>30대</a>
								<a href=''>무술</a>
								<a href=''>스턴트</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid4.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img7.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>자유연기</a>
								<h1>영화 독백</h1>
							</div>
							<div className='tag'>
								<a href=''>독백</a>
								<a href=''>30대</a>
								<a href=''>광기</a>
								<a href=''>집요</a>
							</div>
						</div>
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
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid5.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img8.jpg`}
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
									avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
									label='ID123zxc'
								/>
							</div>

							<div className='title'>
								<a href=''>자유연기</a>
								<h1>공연 낭독</h1>
							</div>
							<div className='tag'>
								<a href=''>독백</a>
								<a href=''>40대</a>
								<a href=''>폭발</a>
								<a href=''>저음</a>
							</div>
						</div>
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

export default Video;
