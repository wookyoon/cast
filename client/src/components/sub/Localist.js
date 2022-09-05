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
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca1.mp4`}
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
								src={`${path}/img/loca1.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>로케이션</p>
					<p>마포카페</p>
				</div>
				<div className='tag'>
					<a href=''>#마포</a>
					<a href=''>#따뜻한</a>
					<a href=''>#안락</a>
					<a href=''>#주말</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca2.mp4`}
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
								src={`${path}/img/loca2.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>로케이션</p>
					<p>브런치카페</p>
				</div>
				<div className='tag'>
					<a href=''>#신림</a>
					<a href=''>#넓은</a>
					<a href=''>#밝은</a>
					<a href=''>#통유리</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca3.mp4`}
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
								src={`${path}/img/loca3.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>스튜디오</p>
					<p>아파트스타일</p>
				</div>
				<div className='tag'>
					<a href=''>#강남</a>
					<a href=''>#거실</a>
					<a href=''>#침실</a>
					<a href=''>#가구</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca4.mp4`}
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
								src={`${path}/img/loca4.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>로케이션</p>
					<p>해변카페</p>
				</div>
				<div className='tag'>
					<a href=''>#강릉</a>
					<a href=''>#넓은</a>
					<a href=''>#테라스</a>
					<a href=''>#야간</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca5.mp4`}
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
								src={`${path}/img/loca5.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>로케이션</p>
					<p>50평형아파트</p>
				</div>
				<div className='tag'>
					<a href=''>#대구</a>
					<a href=''>#아파트</a>
					<a href=''>#넓은</a>
					<a href=''>#평일</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca6.mp4`}
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
								src={`${path}/img/loca6.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>스튜디오</p>
					<p>삼익프라자</p>
				</div>
				<div className='tag'>
					<a href=''>#상암</a>
					<a href=''>#장비</a>
					<a href=''>#24h</a>
					<a href=''>#주차</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca7.mp4`}
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
								src={`${path}/img/loca7.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>스튜디오</p>
					<p>호암스튜디오</p>
				</div>
				<div className='tag'>
					<a href=''>#잠실</a>
					<a href=''>#세트</a>
					<a href=''>#장비</a>
					<a href=''>#평일</a>
				</div>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
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
						content: '2,048',
					}}
				/>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/loca8.mp4`}
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
								src={`${path}/img/loca8.jpg`}
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
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>

				<div className='title'>
					<p>연습실</p>
					<p>리허설</p>
				</div>
				<div className='tag'>
					<a href=''>#홍대</a>
					<a href=''>#촬영</a>
					<a href=''>#녹음</a>
					<a href=''>#100평</a>
				</div>
			</div>
		</section>
	);
}

export default Localist;
