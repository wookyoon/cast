import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';
const path = process.env.PUBLIC_URL;

function Banner() {
	return (
		<section id='banner'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Pagination, Navigation]}
				className='mySwiper'>
				<SwiperSlide>
					<video src={`${path}/vid/banner1.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
				<SwiperSlide>
					<video src={`${path}/vid/banner2.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
				<SwiperSlide>
					<video src={`${path}/vid/banner3.mp4`} loop autoPlay muted></video>
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Banner;
