import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import Search from '../common/Search';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import HoverVideoPlayer from 'react-hover-video-player';

const path = process.env.PUBLIC_URL;
function Mylist() {
	let [modal, setModal] = useState(false);
	const navigate = useNavigate();
	return (
		<section id='mylist'>
			<div className='category'>
				<ul>
					<li>
						<Button size='huge' inverted>
							전체보기
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='yellow'>
							자기소개
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='orange'>
							자유연기
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='teal'>
							감정연기
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='blue'>
							독백
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='brown'>
							흉내
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='pink'>
							특기
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='grey'>
							기타
						</Button>
					</li>
				</ul>
			</div>
			<div className='tags'>
				<ul>
					<li>
						<Button size='large' inverted>
							태그전체
						</Button>
					</li>
					<li>
						<Button.Group size='large' inverted color='grey'>
							<Button>남자</Button>
							<Button.Or />
							<Button>여자</Button>
						</Button.Group>
					</li>

					<li>
						<Button.Group size='large' inverted color='grey'>
							<Button>청년</Button>
							<Button.Or />
							<Button>중년</Button>
							<Button.Or />
							<Button>장년</Button>
						</Button.Group>
					</li>
					<li>
						<Button.Group size='large' inverted color='grey'>
							<Button>차분</Button>
							<Button.Or />
							<Button>평범</Button>
							<Button.Or />
							<Button>쾌할</Button>
						</Button.Group>
					</li>
					<li>
						<Button.Group size='large' inverted color='grey'>
							<Button>마른</Button>
							<Button.Or />
							<Button>보통</Button>
							<Button.Or />
							<Button>건장</Button>
						</Button.Group>
					</li>
					<li>
						<Button.Group size='large' inverted color='grey'>
							<Button>노래</Button>
							<Button.Or />
							<Button>춤</Button>
							<Button.Or />
							<Button>액션</Button>
						</Button.Group>
					</li>
					<li>
						<Button.Group size='large' inverted color='grey'>
							<Button>사투리</Button>
							<Button.Or />
							<Button>외국어</Button>
						</Button.Group>
					</li>
				</ul>
			</div>
			<div className='search'>
				<ul>
					<li>
						<Search />
					</li>
					<li>
						<Button inverted>최신순</Button>
					</li>
					<li>
						<Button inverted>인기순</Button>
					</li>
				</ul>
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='IDabc123zxc'
						variant='outlined'
					/>
				</div>
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
									width: '250px',
									height: '300px',
									objectFit: 'cover',
								}}
							/>
						</div>
					}
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>
				<div className='title'>
					<Button size='tiny' color='yellow'>
						자기소개
					</Button>
					<div className='name'>
						<p>담배피며조직원들집합12</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>중년</Button>
					<Button size='mini'>차분</Button>
					<Button size='mini'>마른</Button>
					<Button size='mini'>사투리</Button>
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
			</div>
			<div className='vid'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='IDabc123zxc'
						variant='outlined'
					/>
				</div>
				<HoverVideoPlayer
					videoSrc={`${path}/vid/vid5.mp4`}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<div id='image'>
							<img
								src={`${path}/img/img7.jpg`}
								alt=''
								style={{
									// Make the image expand to cover the video's dimensions
									width: '250px',
									height: '300px',
									objectFit: 'cover',
								}}
							/>
						</div>
					}
					onClick={() => {
						setModal(!modal);
					}}></HoverVideoPlayer>
				<div className='title'>
					<Button size='tiny' color='orange'>
						자유연기
					</Button>
					<div className='name'>
						<p>글자수는최대12까지</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>청년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>마른</Button>
					<Button size='mini'>외국어</Button>
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
			</div>
		</section>
	);
}

export default Mylist;
