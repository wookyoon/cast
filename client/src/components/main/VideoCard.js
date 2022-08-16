import React,{useState,useEffect} from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { SwiperSlide } from 'swiper/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import ContentStore from '../../store/ContentStore';

function VideoCard({video}) {
    let [modal, setModal] = useState(false);
	// useEffect(() => {
    //     console.log(video);
    // },[]);
    return (
						<HoverVideoPlayer onClick={()=>{ContentStore.setVideo(video)}}
							videoSrc={`${video.url}`}
							pausedOverlay={
								<div className='cover'>
									<div className='info'>
										<h2>{video.title}</h2>
										{video.tag.map((tag, i)=>(
										<p key={i} >#{tag}</p>
										))}
										<div className='box'>
											<div className='profile'>
												<img src={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${video.name}.jpeg`} alt='' />
												<p>{video.name}</p>
											</div>
											<div className='like'>
												<p>
													<FontAwesomeIcon icon={faThumbsUp} />
												</p>
												<p>&nbsp;{video.like}</p>
											</div>
										</div>
									</div>
								</div>
							}>
							</HoverVideoPlayer>
							// onClick={() => {
							// 	setModal(!modal);
							// }}>
    );
}

export default VideoCard;