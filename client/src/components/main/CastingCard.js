import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';

function CastingCard({casting, menu}) {
    return (
	<>
		<div className='id'>
			<Chip
				avatar={
					<Avatar alt='Natacha' src ={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${casting.name}.jpeg`} />
				}
				label={casting.name}
				variant='outlined'
			/>
		</div>
		<div className='deadline'>
				<h1>마감: {casting.dDay}</h1>
		</div>
		<div className='info'>
			<div className='info-inner'>
				<div className='info-front'>
					<div className='category'>
						<h1>{casting.category}</h1>
						<div className='genre'>
							<h1>{casting.genre}</h1>
						</div>
					</div>
					<div className='story'>
						<h1>작품설명</h1>
						<p>{casting.explanation}</p>
					</div>
					<div className='role'>
						<h1>역할설명</h1>
						<p>{casting.roleExplanation}</p>
					</div>
				</div>
				<div className='info-back'>
					<div className='people'>
						<div className='produce'>
							<h1>제작</h1>
							<p>{casting.production}</p>
						</div>
						<div className='director'>
							<h1>감독</h1>
							<p>{casting.director}</p>
						</div>
					</div>
					<div className='info'>
						<div className='date'>
							<h1>촬영일</h1>
							<p>{casting.shootingDate}</p>
						</div>
						<div className='location'>
							<h1>로케이션</h1>
							<p>{casting.location}</p>
						</div>
					</div>
					<div className='etc'>
						<h1>참고사항</h1>
						<p>{casting.note}</p>
					</div>
				</div>
			</div>
		</div>
				<div className='title'>
					<h1>제목</h1>
					<p>{casting.title}</p>
				</div>
				<div className='play'>
					<h1>역할</h1>
					<p>{casting.role}</p>
				</div>

				<div className='tag'>
				{casting.tag.map((tag, i)=>(
					<p key={i}>#{tag}</p>
				))} 
				</div>
	</>
    );
}

export default CastingCard;