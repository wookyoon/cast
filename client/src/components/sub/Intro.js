import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import VidModal from '../main/VideoModal';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';

const path = process.env.PUBLIC_URL;

function Intro() {
	let [modal, setModal] = useState(false);
	return (
		<section id='intro'>
			<div className='vid'>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid0.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={`${path}/img/img3.jpg`}
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
			<div className='info'>
				<h1>이름</h1> <p>김이박</p>
				<h1>소속 / 학력</h1>
				<p>한국대학교 연극영화과</p>
				<h1>키워드</h1>
				<p>20대 남자 학생 부산사투리</p>
				<h1>자기소개</h1>
				<p>
					현재 연극무대에서 주로 활동하는 배우 김이박입니다. 앞으로 영화배우로
					활동을 시작하려고 합니다.
				</p>
			</div>
			<div className='stat'>
				<div className='profile_follow'>
					<div className='profile'>
						<Chip
							avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
							label='IDabc123'
						/>
					</div>
					<div className='follow'>
						<h1>
							<FontAwesomeIcon icon={faBookmark} />
						</h1>
						<p>900</p>
					</div>
				</div>

				<div className='body'>
					<div className='height'>
						<h1>신장</h1>
						<p>175cm</p>
					</div>
					<div className='weight'>
						<h1>체중</h1>
						<p>65kg</p>
					</div>
				</div>
				<div className='special'>
					<h1>특기</h1>
					<p>현대무용</p>
					<p>피아노</p>
				</div>
				<div className='career'>
					<h1>경력</h1>
					<p>[연극]</p>
					<p>2022 햄릿 - 햄릿 주연</p>
					<p>2021 오셀로 - 장군 조연</p>
					<p>[단편]</p>
					<p>2022 청춘예찬 - 현수 주연</p>
					<p>2021 내일 - 영수 조연</p>
				</div>
			</div>
		</section>
	);
}

export default Intro;
