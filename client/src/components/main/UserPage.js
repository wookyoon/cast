import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Intro from './Intro';
import VideoPostList from './VideoPostList';
import ContentStore from '../../store/ContentStore';

function UserPage() {
    const [myVideoList, setMyVideoList] = useState();
    const user = useLocation().search.split("=")[1];
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        ContentStore.getVideoList('mypage', user).then((results)=>{
            console.log("mypage user",user,results)
            setMyVideoList(results)
            setLoading(false);
        });
	}, []);
   

    return (
		isLoading ? <p>Loading</p> :
		<section id='mypage'>
			<table />
			<Intro user={user}/>
			<table />
			<VideoPostList videos={myVideoList} user={user}/>
			<table />
		</section>
	);
}

export default UserPage;