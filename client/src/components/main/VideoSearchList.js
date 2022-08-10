import React, { useEffect,useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './Modal';
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

    useEffect(() => {
        // ContentStore.getVideoListByTag(["드럼"])
        ContentStore.getVideoListByTag();
        console.log(ContentStore.videos);
      },[]);

    // if(isLoading){
    //     return <div>Loading...</div> 
    // }else{
    return (
            <section id='video' >
        <ul className='popular' >
            <h1>{ContentStore.searchTag}</h1>
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
        {modal === true ? <Modal></Modal> : null}
    </section>
    );
            //    }
}

export default observer(VideoSearchList);