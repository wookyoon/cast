import React, { useState, useEffect } from 'react';
import HoverVideoPlayer from 'react-hover-video-player';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import { Button } from 'semantic-ui-react';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import LoginStore from '../../store/LoginStore';
import ContentStore from '../../store/ContentStore';

function Intro() {
    let [modal, setModal] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [intro, setIntro] = useState();
    const [video, setVideo] = useState();
	const [like, setLike] = useState()
	const [likeNum, setLikeNum] = useState();
	const [name, setName] = useState(localStorage.getItem('name'));

    useEffect(() => {
        LoginStore.getUser(name).then(()=>{
            // setLoading(false);
            setIntro(LoginStore.user)
        })
		ContentStore.getIntroVideo("intro", name).then(()=>{
			setVideo(ContentStore.introVideo[0])
			setLike(ContentStore.introVideo[0].likeUser?.includes(localStorage.getItem("name")))
			setLikeNum(ContentStore.introVideo[0].like)
            setLoading(false);
        })
    },[]);

    return (
        isLoading ? <p>Loading</p> :
        <>
        <section id='intro'>
			<div className='vid'>
				<HoverVideoPlayer
					videoSrc={video.videoUrl}
					restartOnPaused // The video should restart when it is paused
					muted={false}
					pausedOverlay={
						<img
							src={video.imageUrl}
							alt=''
							style={{
								// Make the image expand to cover the video's dimensions
								width: '100%',
								height: '100%',
								objectFit: 'cover',
							}}
						/>
					}
					></HoverVideoPlayer>
				{ like ? 
					<Button
					color='red'
					content='Like'
					icon='heart'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: likeNum
					}}
					onClick={(e) => {ContentStore.setLike(video._id, "dislike"); setLike(!like); setLikeNum(likeNum-1)}}
				/> :
				<Button
					color='red'
					content='Like'
					icon='heart outline'
					label={{
						basic: true,
						color: 'red',
						pointing: 'left',
						content: likeNum
					}}
					onClick={(e) => {ContentStore.setLike(video._id, "like"); setLike(!like); setLikeNum(likeNum+1)}}
				/> 
				}
			</div>
			<div className='info'>
				<h1>이름</h1> <p>{intro.name}</p>
				<h1>소속 / 학력</h1>
				<p>{intro.team}</p>
				<h1>키워드</h1>
                {intro.tag.map((tag, i)=>(
                        <p key={i} >#{tag}</p>
                    ))} 
				<h1>자기소개</h1>
				<p>
                {intro.info}
				</p>
			</div>
			<div className='stat'>
				<div className='profile_follow'>
					<div className='profile'>
						<Chip
							avatar={<Avatar alt='Natacha' src={`https://feedback-resized.s3.ap-northeast-2.amazonaws.com/profileImg/${intro.name}.jpeg`} />}
							label={intro.name}
						/>
					</div>
					<div className='follow'>
						<h1>
							<FontAwesomeIcon icon={faBookmark} />
						</h1>
						<p>{intro.bookmark}</p>
					</div>
				</div>

				<div className='body'>
					<div className='height'>
						<h1>신장</h1>
						<p>{intro.height}cm</p>
					</div>
					<div className='weight'>
						<h1>체중</h1>
						<p>{intro.weight}kg</p>
					</div>
				</div>
				<div className='special'>
					<h1>특기</h1>
					<p>{intro.specialty}</p>
				</div>
				<div className='career'>
					<h1>경력</h1>
					<p>{intro.career}</p>
				</div>
			</div>
		</section>
        </>
    );
}

export default Intro;