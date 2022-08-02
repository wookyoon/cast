import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './Modal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
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
						<video
							src={`${path}/vid/vid1.mp4`}
							loop
							autoPlay
							muted
							onClick={() => {
								setModal(!modal);
							}}></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid2.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid3.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid4.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid15.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid6.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid10.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid14.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid16.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid11.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid9.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid8.mp4`} loop autoPlay muted></video>
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
						<video src={`${path}/vid/vid5.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid6.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid7.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid8.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid4.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid3.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid2.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid1.mp4`} loop autoPlay muted></video>
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
						<video src={`${path}/vid/vid9.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid10.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid11.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid12.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid3.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid16.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid4.mp4`} loop autoPlay muted></video>
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
						<video src={`${path}/vid/vid13.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid14.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid15.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid16.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid3.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide>
						<video src={`${path}/vid/vid6.mp4`} loop autoPlay muted></video>
					</SwiperSlide>
					<SwiperSlide></SwiperSlide>
				</Swiper>
			</ul>
			{modal == true ? <Modal></Modal> : null}
		</section>
	);
}

export default Video;
