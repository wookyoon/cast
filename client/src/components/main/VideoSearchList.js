
import React, { useEffect, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import VidModal from './VideoModal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation } from 'swiper';
import ContentStore from '../../store/ContentStore';
import VideoCard from './VideoCard';
import { observer } from 'mobx-react';

const path = process.env.PUBLIC_URL;

function VideoSearchList() {

	let [modal, setModal] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [videos, setVideos] = useState([]);
	const type = window.location.search.split('=')[0];
	const target = decodeURIComponent(window.location.search.split('=')[1]);

	useEffect(() => {
		console.log('2');
		if (type === '?tag') {
			ContentStore.getVideoList('tag', target).then((res) => {
				setLoading(false);
			});
		} else if (type === '?title') {
			ContentStore.getVideoList('title', target).then((res) => {
				setLoading(false);
			});
		}
	}, []);

	return isLoading ? (
		<p>Loading</p>
	) : (
		<>
			<section id='video'>
				<ul className='popular'>
					<Swiper
						slidesPerView={4}
						spaceBetween={0}
						slidesPerGroup={4}
						loop={true}
						loopFillGroupWithBlank={true}
						navigation={true}
						modules={[Navigation]}
						className='mySwiper'>
						{ContentStore.videos.map((video) => (
							<VideoCard key={video._id} video={video} />
						))}
					</Swiper>
				</ul>
				{modal === true ? <VidModal></VidModal> : null}
			</section>
		</>
	);
}

export default observer(VideoSearchList);
