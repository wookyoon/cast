import React from 'react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Pagination from '@mui/material/Pagination';

function Work() {
	return (
		<section id='work'>
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
						<a href=''>남자</a>
					</li>
					<li>
						<a href=''>여자</a>
					</li>
					<li>
						<a href=''>20대</a>
					</li>
					<li>
						<a href=''>30대</a>
					</li>
					<li>
						<a href=''>학생</a>
					</li>
					<li>
						<a href=''>선생님</a>
					</li>
				</ul>
			</div>
			<div className='cards'>
				<div className='card short'>
					<div className='head'>
						<div className='id'>
							<Chip
								avatar={
									<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />
								}
								label='ID123zxc'
								variant='outlined'
							/>
						</div>
						<div className='post_date'>
							<h2>게시일: 2022.10.05</h2>
						</div>
					</div>
					<hr />
					<div className='content'>
						<div className='top'>
							<div className='sort short'>
								<h2>단편영화</h2>
							</div>
							<div className='deadline'>
								<h2>마감일:</h2>
								<p> 2022.10.15</p>
							</div>
						</div>
						<div className='middle'>
							<div className='title'>
								<h2>작품명:</h2>
								<p>명지대학교 졸업작품 '화이팅'</p>
							</div>
							<div className='role'>
								<h2>역할:</h2>
								<p>남자주인공 '김수겸'</p>
							</div>
							<div className='genre'>
								<h2>장르:</h2>
								<p>코메디</p>
							</div>
							<div className='buttons'>
								<button class='btn save'>저장</button>
								<button class='btn apply'>지원</button>
							</div>
						</div>
						<div className='bottom'>
							<div className='keyword'>
								<h2>키워드:</h2>
								<a href=''>20대</a>
								<a href=''>남자</a>
								<a href=''>학생</a>
								<a href=''>무술</a>
							</div>
						</div>
						<div className='more'>
							<details>
								<summary id='info'>자세히보기</summary>
								<div className='description'>
									<div className='story'>
										<h2>작품설명</h2>
										<p>
											중요한 정보가 노출되지 않는 선에서 배우들이 이해할 수 있는
											작품의 줄거리나 주제를 간략히 작성해주세요.
										</p>
									</div>
									<div className='purpose'>
										<h2>역할설명</h2>
										<p>원하는 스타일이나 연기에 대해 작성해주세요.</p>
									</div>
									<div className='details'>
										<div className='left'>
											<div className='produce'>
												<h2>제작</h2>
												<p>명지대학교 영화과 20기</p>
											</div>
											<div className='director'>
												<h2>감독</h2>
												<p>김블루</p>
											</div>
											<div className='date'>
												<h2>촬영예정일</h2>
												<p>2023.08~09</p>
											</div>
											<div className='location'>
												<h2>로케이션</h2>
												<p>서울, 안양, 수원</p>
											</div>
										</div>
										<div className='right'>
											<div className='etc'>
												<h2>참고사항</h2>
												<p>
													감독 경력: 2020년 청소년 영화제 대상
													<br />
													촬영: 김바다 촬영감독
													<br />
													2023년 영화진흥위원회 시나리오 대상
													<br />
													배우 김서울 캐스팅 확정
													<br /> 감독 전작품 영상:
													https://www.youtube.com/watch?v=TSAphNxZFT0
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
				<div className='card long'>
					<div className='head'>
						<div className='id'>
							<Chip
								avatar={
									<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />
								}
								label='ID123zxc'
								variant='outlined'
							/>
						</div>
						<div className='post_date'>
							<h2>게시일: 2022.10.05</h2>
						</div>
					</div>
					<hr />
					<div className='content'>
						<div className='top'>
							<div className='sort long'>
								<h2>장편영화</h2>
							</div>
							<div className='deadline'>
								<h2>마감일:</h2>
								<p> 2022.10.15</p>
							</div>
						</div>
						<div className='middle'>
							<div className='title'>
								<h2>작품명:</h2>
								<p>명지대학교 졸업작품 '화이팅'</p>
							</div>
							<div className='role'>
								<h2>역할:</h2>
								<p>남자주인공 '김수겸'</p>
							</div>
							<div className='genre'>
								<h2>장르:</h2>
								<p>코메디</p>
							</div>
							<div className='buttons'>
								<button class='btn save'>저장</button>
								<button class='btn apply'>지원</button>
							</div>
						</div>
						<div className='bottom'>
							<div className='keyword'>
								<h2>키워드:</h2>
								<a href=''>20대</a>
								<a href=''>남자</a>
								<a href=''>학생</a>
								<a href=''>무술</a>
							</div>
						</div>
						<div className='more'>
							<details>
								<summary id='info'>자세히보기</summary>
								<div className='description'>
									<div className='story'>
										<h2>작품설명</h2>
										<p>
											중요한 정보가 노출되지 않는 선에서 배우들이 이해할 수 있는
											작품의 줄거리나 주제를 간략히 작성해주세요.
										</p>
									</div>
									<div className='purpose'>
										<h2>역할설명</h2>
										<p>원하는 스타일이나 연기에 대해 작성해주세요.</p>
									</div>
									<div className='details'>
										<div className='left'>
											<div className='produce'>
												<h2>제작</h2>
												<p>명지대학교 영화과 20기</p>
											</div>
											<div className='director'>
												<h2>감독</h2>
												<p>김블루</p>
											</div>
											<div className='date'>
												<h2>촬영예정일</h2>
												<p>2023.08~09</p>
											</div>
											<div className='location'>
												<h2>로케이션</h2>
												<p>서울, 안양, 수원</p>
											</div>
										</div>
										<div className='right'>
											<div className='etc'>
												<h2>참고사항</h2>
												<p>
													감독 경력: 2020년 청소년 영화제 대상
													<br />
													촬영: 김바다 촬영감독
													<br />
													2023년 영화진흥위원회 시나리오 대상
													<br />
													배우 김서울 캐스팅 확정
													<br /> 감독 전작품 영상:
													https://www.youtube.com/watch?v=TSAphNxZFT0
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
				<div className='card etc'>
					<div className='head'>
						<div className='id'>
							<Chip
								avatar={
									<Avatar alt='Natacha' src='/static/images/avatar/1.jpg' />
								}
								label='ID123zxc'
								variant='outlined'
							/>
						</div>
						<div className='post_date'>
							<h2>게시일: 2022.10.05</h2>
						</div>
					</div>
					<hr />
					<div className='content'>
						<div className='top'>
							<div className='sort etc'>
								<h2>기타</h2>
							</div>
							<div className='deadline'>
								<h2>마감일:</h2>
								<p> 2022.10.15</p>
							</div>
						</div>
						<div className='middle'>
							<div className='title'>
								<h2>작품명:</h2>
								<p>명지대학교 졸업작품 '화이팅'</p>
							</div>
							<div className='role'>
								<h2>역할:</h2>
								<p>남자주인공 '김수겸'</p>
							</div>
							<div className='genre'>
								<h2>장르:</h2>
								<p>코메디</p>
							</div>
							<div className='buttons'>
								<button class='btn save'>저장</button>
								<button class='btn apply'>지원</button>
							</div>
						</div>
						<div className='bottom'>
							<div className='keyword'>
								<h2>키워드:</h2>
								<a href=''>20대</a>
								<a href=''>남자</a>
								<a href=''>학생</a>
								<a href=''>무술</a>
							</div>
						</div>
						<div className='more'>
							<details>
								<summary id='info'>자세히보기</summary>
								<div className='description'>
									<div className='story'>
										<h2>작품설명</h2>
										<p>
											중요한 정보가 노출되지 않는 선에서 배우들이 이해할 수 있는
											작품의 줄거리나 주제를 간략히 작성해주세요.
										</p>
									</div>
									<div className='purpose'>
										<h2>역할설명</h2>
										<p>원하는 스타일이나 연기에 대해 작성해주세요.</p>
									</div>
									<div className='details'>
										<div className='left'>
											<div className='produce'>
												<h2>제작</h2>
												<p>명지대학교 영화과 20기</p>
											</div>
											<div className='director'>
												<h2>감독</h2>
												<p>김블루</p>
											</div>
											<div className='date'>
												<h2>촬영예정일</h2>
												<p>2023.08~09</p>
											</div>
											<div className='location'>
												<h2>로케이션</h2>
												<p>서울, 안양, 수원</p>
											</div>
										</div>
										<div className='right'>
											<div className='etc'>
												<h2>참고사항</h2>
												<p>
													감독 경력: 2020년 청소년 영화제 대상
													<br />
													촬영: 김바다 촬영감독
													<br />
													2023년 영화진흥위원회 시나리오 대상
													<br />
													배우 김서울 캐스팅 확정
													<br /> 감독 전작품 영상:
													https://www.youtube.com/watch?v=TSAphNxZFT0
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
			<div className='pages'>
				<Pagination count={10} variant='outlined' shape='rounded' id='page' />
			</div>
			<table></table>
		</section>
	);
}

export default Work;
