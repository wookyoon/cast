import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';
import VidModal from '../main/VidModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;

function Localist() {
	let [modal, setModal] = useState(false);
	return (
		<section id='video'>
			<div className='category'>
				<ul>
					<li>
						<h1>전체보기</h1>
					</li>
					<li>
						<h1>로케이션</h1>
					</li>
					<li>
						<h1>스튜디오</h1>
					</li>
					<li>
						<h1>연습실</h1>
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
						<a href=''>카페</a>
					</li>
					<li>
						<a href=''>실내</a>
					</li>
					<li>
						<a href=''>옥상</a>
					</li>
					<li>
						<a href=''>사무실</a>
					</li>
					<li>
						<a href=''>촬영장비</a>
					</li>
					<li>
						<a href=''></a>
					</li>
				</ul>
			</div>
			<div className='vid'>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca1.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca1.jpg`}
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
								<a href=''>로케이션</a>
								<h1>카페</h1>
							</div>
							<div className='tag'>
								<a href=''>마포</a>
								<a href=''>주말</a>
								<a href=''>야간</a>
								<a href=''>카페</a>
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
					videoSrc={`${path}/vid/loca2.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca2.jpg`}
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
								<a href=''>로케이션</a>
								<h1>브런치카페</h1>
							</div>
							<div className='tag'>
								<a href=''>신림</a>
								<a href=''>넓은</a>
								<a href=''>밝은</a>
								<a href=''>통유리</a>
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
					videoSrc={`${path}/vid/loca3.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca3.jpg`}
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
					videoSrc={`${path}/vid/loca4.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca4.jpg`}
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
					videoSrc={`${path}/vid/loca5.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca5.jpg`}
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
					videoSrc={`${path}/vid/loca6.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca6.jpg`}
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
					videoSrc={`${path}/vid/loca7.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca7.jpg`}
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
					videoSrc={`${path}/vid/loca8.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/loca8.jpg`}
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

export default Localist;
