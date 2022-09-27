import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';
import VideoModal from '../main/VideoModal';
import Search from '../common/Search';
import { Label } from 'semantic-ui-react';
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
						<Button size='huge' inverted>
							전체보기
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='yellow'>
							단편
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='orange'>
							장편
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='teal'>
							연극
						</Button>
					</li>{' '}
					<li>
						<Button size='huge' inverted color='blue'>
							뮤지컬
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='brown'>
							시리즈
						</Button>
					</li>
					<li>
						<Button size='huge' inverted color='pink'>
							광고
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
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>최대60자</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>최대60자</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>최대14자</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>최대14자</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>최대14자</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>최대 14자</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='yellow'>
						단편
					</Button>
					<div className='name'>
						<p>최대12자</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>중년</Button>
					<Button size='mini'>차분</Button>
					<Button size='mini'>마른</Button>
					<Button size='mini'>사투리</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>
								작은 해안마을에 나타난 식인상어를 처치하기 위해 싸우는
								경찰서장의 이야기
							</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>주연 / 의협심이 강한 경찰서장</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>드래곤스튜디오</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>인천 수원 잠실</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>7.10-10.25</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>회당 20만원</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='orange'>
						장편
					</Button>
					<div className='name'>
						<p>돌아온 죠스</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>장년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>건장</Button>
					<Button size='mini'>액션</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>
								곡성의 한 경찰이 마을을 둘러싼 정체불명의 괴사건들을 파헤쳐
								나가는 이야기
							</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>조연 / 정체불명의 일본인</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>드래곤스튜디오</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>인천 수원 잠실 제주도 곡성</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>10.10-12.25</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>회당 20만원</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='teal'>
						연극
					</Button>
					<div className='name'>
						<p>곡성 호텔</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>장년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>건장</Button>
					<Button size='mini'>액션</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>
								곡성의 한 경찰이 마을을 둘러싼 정체불명의 괴사건들을 파헤쳐
								나가는 이야기
							</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>조연 / 정체불명의 일본인</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>드래곤스튜디오</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>인천 수원 잠실 제주도 곡성</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>10.10-12.25</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>회당 20만원</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='blue'>
						뮤지컬
					</Button>
					<div className='name'>
						<p>곡성 호텔</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>장년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>건장</Button>
					<Button size='mini'>액션</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>
								곡성의 한 경찰이 마을을 둘러싼 정체불명의 괴사건들을 파헤쳐
								나가는 이야기
							</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>조연 / 정체불명의 일본인</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>드래곤스튜디오</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>인천 수원 잠실 제주도 곡성</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>10.10-12.25</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>회당 20만원</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='brown'>
						시리즈
					</Button>
					<div className='name'>
						<p>곡성 호텔</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>장년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>건장</Button>
					<Button size='mini'>액션</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>
								곡성의 한 경찰이 마을을 둘러싼 정체불명의 괴사건들을 파헤쳐
								나가는 이야기
							</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>조연 / 정체불명의 일본인</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>드래곤스튜디오</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>인천 수원 잠실 제주도 곡성</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>10.10-12.25</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>회당 20만원</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='pink'>
						광고
					</Button>
					<div className='name'>
						<p>곡성 호텔</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>장년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>건장</Button>
					<Button size='mini'>액션</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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
			</div>{' '}
			<div className='card'>
				<div className='id'>
					<Chip
						avatar={<Avatar alt='Natacha' src={`${path}/img/img3.jpg`} />}
						label='ID123zxc'
						variant='outlined'
					/>
				</div>
				<div className='deadline'>
					<div class='ui grey label'>
						마감<div class='detail'>10.26</div>
					</div>
				</div>
				<div className='info-card'>
					<div className='story'>
						<div class='ui large grey label'>로그라인</div>
						<div className='context'>
							<p>
								곡성의 한 경찰이 마을을 둘러싼 정체불명의 괴사건들을 파헤쳐
								나가는 이야기
							</p>
						</div>
					</div>
					<div className='role'>
						<div class='ui large grey label'>역할설명</div>
						<div className='context'>
							<p>조연 / 정체불명의 일본인</p>
						</div>
					</div>
					<div className='info'>
						<div className='produce'>
							<div class='ui large grey label'>제작</div>
							<div className='text'>
								<p>드래곤스튜디오</p>
							</div>
						</div>
						<div className='location'>
							<div class='ui large grey label'>촬영지</div>
							<div className='text'>
								<p>인천 수원 잠실 제주도 곡성</p>
							</div>
						</div>
					</div>
					<div className='info2'>
						<div className='date'>
							<div class='ui large grey label'>촬영일</div>
							<div className='text'>
								<p>10.10-12.25</p>
							</div>
						</div>
						<div className='pay'>
							<div class='ui large grey label'>출연료</div>
							<div className='text'>
								<p>회당 20만원</p>
							</div>
						</div>
					</div>
				</div>
				<div className='title'>
					<Button size='tiny' color='grey'>
						기타
					</Button>
					<div className='name'>
						<p>곡성 호텔</p>
					</div>
				</div>
				<div className='tag'>
					<Button size='mini'>장년</Button>
					<Button size='mini'>평범</Button>
					<Button size='mini'>건장</Button>
					<Button size='mini'>액션</Button>
				</div>
				<Button id='apply' size='small' color='red'>
					지원하기
				</Button>
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

export default Localist;
