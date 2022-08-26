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
import { useNavigate  } from 'react-router-dom';
import { Link } from 'react-router-dom';
import SearchList from './VideoSearchList';
const path = process.env.PUBLIC_URL;

function VideoList() {
    let [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        ContentStore.getVideoList("main",["popular","나비","드럼"]);
        console.log(ContentStore.videos);
    },[]);
    
    const searchByTag = (tag) =>{
        navigate('/search?tag='+tag);
    } 
    // if(isLoading){
    //     return <div>Loading...</div> 
    // }else{
    return (
        <>
        {ContentStore.videos.map((tagvideos, idx) => (      
            <section id='video' key={idx}>
        <ul className='popular' >
        {/* <Link to= '/search' state= {{tag: docs.tagname}}  replace={true}> */}
            <h1 onClick={()=>searchByTag(tagvideos.tag)}>{tagvideos.tag}</h1>
            {/* </Link> */}
            <Swiper 
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