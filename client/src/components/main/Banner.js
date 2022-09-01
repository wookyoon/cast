import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
const path = process.env.PUBLIC_URL;

function Banner() {
	return (
		<section id='banner'>
			<Swiper
				slidesPerView={1}
				spaceBetween={30}
				autoplay={{
					delay: 2000,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className='mySwiper'>
				<SwiperSlide>
					<img src={`${path}/img/banner1.jpg`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/banner2.jpg`} alt='' />
				</SwiperSlide>
				<SwiperSlide>
					<img src={`${path}/img/banner3.jpg`} alt='' />
				</SwiperSlide>
			</Swiper>
		</section>
	);
}

export default Banner;
