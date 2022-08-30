import React, { useEffect,useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import Modal from './Modal';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';
import ContentStore from '../../store/ContentStore';
import VideoCard from './VideoCard';
import { observer } from 'mobx-react';
import { useNavigate  } from 'react-router-dom';
const path = process.env.PUBLIC_URL;

function VideoList() {
    let [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        ContentStore.getVideoList("main",["Popular","건반","드럼"]);
        setLoading(false);
        console.log(ContentStore.videos);
    },[]);
    
    return (
        isLoading ? <p>Loading</p> :
        <>
        {ContentStore.videos.map((tagvideos, idx) => (      
            <section id='video' key={idx}>
        <ul className='popular' >
            <h1 onClick={()=>navigate('/search?tag='+tagvideos.tag)}>{tagvideos.tag}</h1>
            <Swiper key={tagvideos.tag}
                slidesPerView={4}
                spaceBetween={0}
                slidesPerGroup={4}
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Navigation]}
                className='mySwiper'
                >
                {tagvideos.videos.map((video,index) =>(
                    <SwiperSlide key={index}>
                        <VideoCard  video={video} index={index}/>
                    </SwiperSlide>
                  ))}
            </Swiper>
        </ul>
        {modal === true ? <Modal></Modal> : null}
    </section>
        ))}
        </>
    );
}

export default observer(VideoList);