import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import CastingStore from '../../store/CastingStore';

function CastingCard({casting, menu}) {
    return (
        <div className='cards'>
				<div className='card short'>
					<div className='head'>
						<div className='id'>
							<Chip
								avatar={
									<Avatar alt='Natacha' src ={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${casting.name}.jpeg`} />
								}
								label={casting.name}
								variant='outlined'
							/>
						</div>
						<div className='post_date'>
							<h2>게시일: {casting.created}</h2>
						</div>
					</div>
					<hr />
					<div className='content'>
						<div className='top'>
							<div className='sort short'>
								<h2> {casting.category}</h2>
							</div>
							<div className='deadline'>
								<h2>마감일:</h2>
								<p>  {casting.dDay}</p>
							</div>
						</div>
						<div className='middle'>
							<div className='title'>
								<h2>작품명:</h2>
								<p> {casting.title}</p>
							</div>
							<div className='role'>
								<h2>역할:</h2>
								<p> {casting.role}</p>
							</div>
							<div className='genre'>
								<h2>장르:</h2>
								<p> {casting.genre}</p>
							</div>

							{menu === "all" &&
							<div className='buttons'>
								<button class='btn save'>저장</button>
								<button class='btn apply' onClick={()=>{CastingStore.setCasting(casting); CastingStore.setModal(true)}}>지원</button>
							</div>
							}
							{menu === "created" &&
							<div className='buttons'>
								<button class='btn save' onClick={()=>{CastingStore.setCasting(casting); CastingStore.setModal(true)}}>지원자 확인</button>
								<button class='btn apply' onClick={()=>{CastingStore.setCasting(casting); CastingStore.setModal(true)}}>수정</button>
								<button class='btn apply' onClick={()=>{CastingStore.setCasting(casting); CastingStore.setModal(true)}}>삭제</button>
							</div>
							}
							{menu === "save" &&
							<div className='buttons'>
								<button class='btn apply' onClick={()=>{CastingStore.setCasting(casting, "save"); CastingStore.setModal(true)}}>수정</button>
								<button class='btn apply' onClick={()=>{CastingStore.setCasting(casting); CastingStore.setModal(true)}}>삭제</button>
							</div>
							}
							{menu === "apply" &&
							<div className='buttons'>
								<button class='btn apply' onClick={()=>{CastingStore.setCasting(casting, "apply"); CastingStore.setModal(true)}}>확인</button>
							</div>
							}
						</div>
						<div className='bottom'>
							<div className='keyword'>
								<h2>키워드:</h2>
								{casting.tag.map((tag, i)=>(
                                    <p key={i}>#{tag}</p>
                                ))} 
							</div>
						</div>
						<div className='more'>
							<details>
								<summary id='info'>자세히보기</summary>
								<div className='description'>
									<div className='story'>
										<h2>작품설명</h2>
										<p>
                                        {casting.explanation}
										</p>
									</div>
									<div className='purpose'>
										<h2>역할설명</h2>
										<p>{casting.roleExplanation}</p>
									</div>
									<div className='details'>
										<div className='left'>
											<div className='produce'>
												<h2>제작</h2>
												<p>{casting.production}</p>
											</div>
											<div className='director'>
												<h2>감독</h2>
												<p>{casting.director}</p>
											</div>
											<div className='date'>
												<h2>촬영예정일</h2>
												<p>{casting.shootingDate}</p>
											</div>
											<div className='location'>
												<h2>로케이션</h2>
												<p>{casting.location}</p>
											</div>
										</div>
										<div className='right'>
											<div className='etc'>
												<h2>참고사항</h2>
												<p>
                                                {casting.note}
												</p>
											</div>
										</div>
									</div>
								</div>
							</details>
						</div>
					</div>
					<div className='sub'></div>
				</div>
            </div>
    );
}

export default CastingCard;