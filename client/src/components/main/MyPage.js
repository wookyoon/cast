import React, {useState, useEffect} from 'react';
import { useLocation } from 'react-router-dom';
import Intro from './Intro';
import VideoPostList from './VideoPostList';
import MyPageCastingList from './MyPageCastingList';
import CastingStore from '../../store/CastingStore';
import ContentStore from '../../store/ContentStore';

function MyPage() {
	const [menu, setMenu] = useState(0);
	const [name, setName] = useState(localStorage.getItem("name"));
    const [saveCastingList, setSaveCastingsList] = useState();
    const [applyCastingList, setApplyCastingList] = useState();
    const [createCastingList, setCreateCastingList] = useState();
    const [myVideoList, setMyVideoList] = useState();
    const [likeVideoList, setLikeVideoList] = useState();
    const [userVideoList, setUserVideoList] = useState();
    const [isLoading, setLoading] = useState(true);
	const user = useLocation().search.split("=")[1]
	// const user = ;

	useEffect(() => {
		CastingStore.getCastingList("save", name).then((results)=>{
			// setLoading(false);
			console.log("save",results)

			setSaveCastingsList(results);
		});
		CastingStore.getCastingList("apply", name).then((results)=>{
			// setLoading(false);
			console.log("apply",results)

			setApplyCastingList(results);
		});
		CastingStore.getCastingList("created", name).then((results)=>{
			// setLoading(false);
			console.log("create",results)

			setCreateCastingList(results);
		});
		if(user){
			ContentStore.getVideoList('mypage', user).then((results)=>{
				console.log("mypage user",user,results)
				setMyVideoList(results)
			});
		}else{
			ContentStore.getVideoList('mypage', name).then((results)=>{
				console.log("mypage name",name,results)
				setMyVideoList(results)
			});
		}
		ContentStore.getVideoList('mypage', name, "video").then((results)=>{
			console.log("like",results)
			setLikeVideoList(results)
		});
		ContentStore.getVideoList('mypage', name, "user").then((results)=>{
			console.log("user",results)
			setUserVideoList(results)
			setLoading(false);

		});
		if(saveCastingList && applyCastingList && createCastingList && myVideoList && likeVideoList && userVideoList){
			setLoading(false);
		}
	},[]);

	if(user){
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
    }else{
		return (
			isLoading ? <p>Loading</p> :
			<section id='mypage'>
				<table />
				<Intro user={name}/>
				<table />
				<div className='category' >
				<ul>
					<li style={{ display: 'inline' }} onClick={()=>{setMenu(0)}}>
					   <h1 style={{color:"white"}}>비디오 리스트</h1>
					</li>
					<li style={{ display: 'inline' }} onClick={()=>{setMenu(1) }}>
					   <h1 style={{color:"white"}}> 지원 작품 리스트</h1>
					</li>
					<li style={{ display: 'inline' }} onClick={()=>{ setMenu(2) }}>
					<h1 style={{color:"white"}}>저장 작품 리스트</h1>
					</li>
					<li style={{ display: 'inline' }} onClick={()=>{ setMenu(3)}}>
					<h1 style={{color:"white"}}>생성 작품 리스트</h1>
					</li>
					<li style={{ display: 'inline' }} onClick={()=>{ setMenu(4)}}>
					<h1 style={{color:"white"}}>좋아요 비디오</h1>
					</li>
					<li style={{ display: 'inline' }} onClick={()=>{ setMenu(5)}}>
					<h1 style={{color:"white"}}>북마크 유저</h1>
					</li>
				</ul>
				{menu === 0  &&  <VideoPostList videos={myVideoList} user={name} menu={"mine"}/> }
				{menu === 1  &&  <MyPageCastingList castings={applyCastingList} menu="apply" name={name}/> }
				{menu === 2  &&  <MyPageCastingList castings={saveCastingList} menu="save" name={name}/> }
				{menu === 3  &&  <MyPageCastingList castings={createCastingList} menu="created" name={name}/> }
				{menu === 4  &&  <VideoPostList videos={likeVideoList} user={name} menu={"video"}/> }
				{menu === 5  &&  <VideoPostList videos={userVideoList} user={name} menu={"user"}/> }

			</div>
				<table />
			</section>
		);	
	}
}

export default MyPage;