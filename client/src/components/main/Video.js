import React, { useRef, useState } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './Modal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
const path = process.env.PUBLIC_URL;

function Video() {
	let [modal, setModal] = useState(false);
	return (
		<section id='video'>
			<ul className='popular'>
				<h1>Popular</h1>
				<Swiper
					slidesPerView={4}
					spaceBetween={0}
					slidesPerGroup={4}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					modules={[Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid11.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid1.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid2.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid3.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid4.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid16.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid15.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid14.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid8.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid7.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid6.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid5.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
				</Swiper>
			</ul>
			<ul className='play'>
				<h1>Play</h1>
				<Swiper
					slidesPerView={4}
					spaceBetween={0}
					slidesPerGroup={4}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					modules={[Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid5.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid6.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid7.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid8.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid16.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid4.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid10.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid14.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
				</Swiper>
			</ul>
			<ul className='sing'>
				<h1>Sing</h1>
				<Swiper
					slidesPerView={4}
					spaceBetween={0}
					slidesPerGroup={4}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					modules={[Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid9.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid10.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid11.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid12.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid4.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid3.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid7.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
				</Swiper>
			</ul>
			<ul className='show'>
				<h1>Show</h1>
				<Swiper
					slidesPerView={4}
					spaceBetween={0}
					slidesPerGroup={4}
					loop={true}
					loopFillGroupWithBlank={true}
					navigation={true}
					modules={[Navigation]}
					className='mySwiper'>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid13.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid14.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid15.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid16.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid2.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
					<SwiperSlide>
						<HoverVideoPlayer
							videoSrc={`${path}/vid/vid1.mp4`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>Title is My Sharona</h2>
										<p>#actor #monologue #voice #strangerthings</p>
										<div className='box'>
											<div className='profile'>
												<img src={`${path}/img/img1.jpg`} alt='' />
												<p>&nbsp;id123!</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;489</p>
											</div>
										</div>
									</div>
								</div>
							}
							onClick={() => {
								setModal(!modal);
							}}></HoverVideoPlayer>
					</SwiperSlide>
				</Swiper>
			</ul>
			{modal == true ? <Modal></Modal> : null}
		</section>
	);
}

export default Video;
