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

function VideoList() {
    let [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        ContentStore.getVideoList(["피아노","바이올린"])
        console.log(ContentStore.videos);
      },[]);

    // if(isLoading){
    //     return <div>Loading...</div> 
    // }else{
    return (
        <>
        {ContentStore.videos.map((docs, idx) => (      
            <section id='video' key={idx}>
        <ul className='popular' >
            <h1>{docs.tagname}</h1>
            <Swiper 
                slidesPerView={4}
                spaceBetween={0}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
                key={idx}>
                {docs.videos.map((video) => (
                    <SwiperSlide key={video._id}>
                        <VideoCard  video={video} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </ul>
        {modal === true ? <Modal></Modal> : null}
    </section>
        ))}
        </>
    );
            //    }
}

export default observer(VideoList);