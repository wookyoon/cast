import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';
import { observer } from 'mobx-react';
import castingCategory from '../../utils/castingCategory';

function CastingCard({casting}) {
	const [name, setName] = useState(localStorage.getItem('name'));
	const navigate = useNavigate();

	const handleLike = (type) => {
		console.log(name)
		// if (video.name === name) {
		// 	return alert('마이페이지');
		// } else if(name===null) {
		// 	return alert('로그인이 필요한 기능입니다.');
		// } else {
		// 	ContentStore.setLike(video._id, type);
		// 	ContentStore.setVideo(video, 'like', type);
		// }
	};

    return (
	<div>
			<div
				className='id'
				onClick={() => navigate('/userpage/?user=' + casting.name)}>
				<Chip
					avatar={
						<Avatar
							alt={casting.name}
							src={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${casting.name}.jpeg`}
						/>
					}
					label={casting.name}
					variant='outlined'
				/>
			</div>
			<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
			{casting.likeUser?.includes(name) ? (
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
						content: casting.like,
					}}
					onClick={(e) => handleLike('dislike')}
				/>
			) : (
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
						content: casting.like,
					}}
					onClick={(e) => handleLike('like')}
				/>
			)}
			<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>{casting.dDay}</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>{casting.note}</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>{casting.roleExplanation}</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>{casting.production}</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>{casting.location}</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>{casting.shootingDate}</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>감독</div>
							<div className='text'>
								<p>{casting.director}</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
				{casting.category === '단편' && (
					<Button size='tiny' color='yellow'>
						{casting.category}
					</Button>
				)}
				{casting.category === '장편' && (
					<Button size='tiny' color='orange'>
						{casting.category}
					</Button>
				)}
				{casting.category === '연극' && (
					<Button size='tiny' color='teal'>
						{casting.category}
					</Button>
				)}
				{casting.category === '뮤지컬' && (
					<Button size='tiny' color='blue'>
						{casting.category}
					</Button>
				)}
				{casting.category === '시리즈' && (
					<Button size='tiny' color='brown'>
						{casting.category}
					</Button>
				)}
				{casting.category === '광고' && (
					<Button size='tiny' color='pink'>
						{casting.category}
					</Button>
				)}
				{casting.category === '기타' && (
					<Button size='tiny' color='grey'>
						{casting.category}
					</Button>
				)}
					<div className='name'>
						<p>{casting.title}</p>
					</div>
			</div>
	</div>
    );
}

export default observer(CastingCard);