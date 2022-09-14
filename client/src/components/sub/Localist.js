import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';
import VideoModal from '../main/VideoModal';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;

function Localist() {
	let [modal, setModal] = useState(false);
	return (
		<section id='job'>
			<div className='category'>
				<ul>
					<li>
						<h1>전체보기</h1>
					</li>
					<li>
						<h1>단편영화</h1>
					</li>
					<li>
						<h1>장편영화</h1>
					</li>
					<li>
						<h1>기타</h1>
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
						<a href=''>#20대</a>
					</li>
					<li>
						<a href=''>#여성</a>
					</li>
					<li>
						<a href=''>#남성</a>
					</li>
					<li>
						<a href=''>#강인한</a>
					</li>
					<li>
						<a href=''>#외로운</a>
					</li>
					<li>
						<a href=''>#건강한</a>
					</li>
				</ul>
			</div>
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
				<div className='deadline'>
					<h1>마감: 06.28</h1>
				</div>
				<div className='info'>
					<div className='info-inner'>
						<div className='info-front'>
							<div className='category'>
								<h1>분류</h1>
								<div className='genre'>
									<h1>장르</h1>
								</div>
							</div>
							<div className='story'>
								<h1>작품설명</h1>
								<p>배를 타고 바다로 나가 상어를 처리한다</p>
							</div>
							<div className='role'>
								<h1>역할설명</h1>
								<p>물을 무서워하는 보안관</p>
							</div>
						</div>
						<div class='info-back'>
							<div className='people'>
								<div className='produce'>
									<h1>제작</h1>
									<p>명지대학교</p>
								</div>
								<div className='director'>
									<h1>감독</h1>
									<p>김이박</p>
								</div>
							</div>
							<div className='info'>
								<div className='date'>
									<h1>촬영일</h1>
									<p>07.15-07.28</p>
								</div>
								<div className='location'>
									<h1>로케이션</h1>
									<p>서울, 파주</p>
								</div>
							</div>
							<div className='etc'>
								<h1>참고사항</h1>
								<p>촬영감독 김촬영</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<h1>제목</h1>
					<p>내 핑계 대지마</p>
				</div>
				<div className='play'>
					<h1>역할</h1>
					<p>주연 이김박</p>
				</div>

				<div className='tag'>
					<a href=''>#남자</a>
					<a href=''>#20대</a>
					<a href=''>#창백</a>
					<a href=''>#소심</a>
				</div>
				<div className='buttons'>
					<button class='btn save'>저장</button>
					<button class='btn apply'>지원</button>
				</div>
			</div>
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
				<div className='deadline'>
					<h1>마감: 06.28</h1>
				</div>
				<div className='info'>
					<div className='info-inner'>
						<div className='info-front'>
							<div className='category'>
								<h1>단편영화</h1>
								<div className='genre'>
									<h1>코미디</h1>
								</div>
							</div>
							<div className='story'>
								<h1>작품설명</h1>
								<p>새로운 학교에 전학갔는데 모두가 일찐이다</p>
							</div>
							<div className='role'>
								<h1>역할설명</h1>
								<p>내신으로 서울대 가고싶어하는 고등학생</p>
							</div>
						</div>
						<div class='info-back'>
							<div className='people'>
								<div className='produce'>
									<h1>제작</h1>
									<p>영화아카데미</p>
								</div>
								<div className='director'>
									<h1>감독</h1>
									<p>박이김</p>
								</div>
							</div>
							<div className='info'>
								<div className='date'>
									<h1>촬영일</h1>
									<p>07.15-07.28</p>
								</div>
								<div className='location'>
									<h1>로케이션</h1>
									<p>강남, 분당</p>
								</div>
							</div>
							<div className='etc'>
								<h1>참고사항</h1>
								<p>감독 2022년 단편영화제 수상</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<h1>제목</h1>
					<p>대학 못갈지도?</p>
				</div>
				<div className='play'>
					<h1>역할</h1>
					<p>주연 김고딩</p>
				</div>

				<div className='tag'>
					<a href=''>#남자</a>
					<a href=''>#10대</a>
					<a href=''>#170cm</a>
					<a href=''>#안경</a>
				</div>
				<div className='buttons'>
					<button class='btn save'>저장</button>
					<button class='btn apply'>지원</button>
				</div>
			</div>
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
				<div className='deadline'>
					<h1>마감: 07.08</h1>
				</div>
				<div className='info'>
					<div className='info-inner'>
						<div className='info-front'>
							<div className='category'>
								<h1>장편영화</h1>
								<div className='genre'>
									<h1>로맨스</h1>
								</div>
							</div>
							<div className='story'>
								<h1>작품설명</h1>
								<p>이직한 회사 상사가 전남친이다</p>
							</div>
							<div className='role'>
								<h1>역할설명</h1>
								<p>많은 연봉을 받기위해 이직한 개발자</p>
							</div>
						</div>
						<div class='info-back'>
							<div className='people'>
								<div className='produce'>
									<h1>제작</h1>
									<p>넷플릭스</p>
								</div>
								<div className='director'>
									<h1>감독</h1>
									<p>김옹밥</p>
								</div>
							</div>
							<div className='info'>
								<div className='date'>
									<h1>촬영일</h1>
									<p>03.15-06.28</p>
								</div>
								<div className='location'>
									<h1>로케이션</h1>
									<p>서울, 전주</p>
								</div>
							</div>
							<div className='etc'>
								<h1>참고사항</h1>
								<p>청룡영화사 수상자 김감독의 신작</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<h1>제목</h1>
					<p>퇴사마렵다</p>
				</div>
				<div className='play'>
					<h1>역할</h1>
					<p>주연 이나박</p>
				</div>

				<div className='tag'>
					<a href=''>#여자</a>
					<a href=''>#30대</a>
					<a href=''>#밝은</a>
					<a href=''>#복싱</a>
				</div>
				<div className='buttons'>
					<button class='btn save'>저장</button>
					<button class='btn apply'>지원</button>
				</div>
			</div>
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
					/>
				</div>
				<div className='deadline'>
					<h1>마감: 11.11</h1>
				</div>
				<div className='info'>
					<div className='info-inner'>
						<div className='info-front'>
							<div className='category'>
								<h1>기타</h1>
								<div className='genre'>
									<h1>스릴러</h1>
								</div>
							</div>
							<div className='story'>
								<h1>작품설명</h1>
								<p>독서실 냉장고에 바나나우유가 사라졌다</p>
							</div>
							<div className='role'>
								<h1>역할설명</h1>
								<p>바바나우유 매니아 고시생</p>
							</div>
						</div>
						<div class='info-back'>
							<div className='people'>
								<div className='produce'>
									<h1>제작</h1>
									<p>유튜브</p>
								</div>
								<div className='director'>
									<h1>감독</h1>
									<p>박김박</p>
								</div>
							</div>
							<div className='info'>
								<div className='date'>
									<h1>촬영일</h1>
									<p>11.15-12.28</p>
								</div>
								<div className='location'>
									<h1>로케이션</h1>
									<p>부산</p>
								</div>
							</div>
							<div className='etc'>
								<h1>참고사항</h1>
								<p>100만 유튜버 김유튜 시리즈</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<h1>제목</h1>
					<p>바나나는 하얗다</p>
				</div>
				<div className='play'>
					<h1>역할</h1>
					<p>주연 김딸기</p>
				</div>

				<div className='tag'>
					<a href=''>#남자</a>
					<a href=''>#20대</a>
					<a href=''>#180cm</a>
					<a href=''>#마른</a>
				</div>
				<div className='buttons'>
					<button class='btn save'>저장</button>
					<button class='btn apply'>지원</button>
				</div>
			</div>
		</section>
	);
}

export default Localist;
