import React, {useState, useEffect} from 'react';
import ContentStore from '../../store/ContentStore';
import LoginStore from '../../store/LoginStore';
import VideoList from './VideoList';
import OfferedModal from './OfferedModal';

function MyVideoList() {
	const [menu, setMenu] = useState(0);
    const [myVideoList, setMyVideoList] = useState();
	const [name, setName] = useState(localStorage.getItem("name"));
    const [isLoading, setLoading] = useState(true);
    const [likeVideoList, setLikeVideoList] = useState();
    const [userVideoList, setUserVideoList] = useState();
    const [offerList, setOfferList] = useState();

    useEffect(() => {
		ContentStore.getVideoList('mypage', name).then((results)=>{
			// console.log("mypage name",name,results)
			setMyVideoList(results)
		});
        ContentStore.getVideoList('mypage', name, "video").then((results)=>{
			setLikeVideoList(results);
			// console.log("like",likeVideoList);
		});
		ContentStore.getVideoList('mypage', name, "user").then((results)=>{
			setUserVideoList(results);
			// console.log("user",results);
			// setLoading(false);

		});
		LoginStore.getOffers(name).then((results)=>{
			setOfferList(results.offer);
			console.log("offesss", results)
			setLoading(false);
		})
	},[]);

    return  isLoading ? (  <p>Loading</p> ):(
		<section id='mypage'>
			<table />
			<div className='category' >
			<ul>
				<li style={{ display: 'inline' }} onClick={()=>{setMenu(0)}}>
					<h1 style={{color:"white"}}>비디오 리스트</h1>
				</li>
				<li style={{ display: 'inline' }} onClick={()=>{ setMenu(1)}}>
				<h1 style={{color:"white"}}>좋아요 비디오</h1>
				</li>
				<li style={{ display: 'inline' }} onClick={()=>{ setMenu(2)}}>
				<h1 style={{color:"white"}}>북마크 유저</h1>
				</li>
				<li style={{ display: 'inline' }} onClick={()=>{ LoginStore.setOfferedModal(true)}}>
				<h1 style={{color:"white"}}>지원 확인</h1>
				</li>
			</ul>
			{menu === 0  &&  <VideoList videos={myVideoList} user={name} type={"my"}/> }
			{menu === 1  &&  <VideoList videos={likeVideoList} user={name} type={"my"}/> }
			{menu === 2  &&  <VideoList videos={userVideoList} user={name} type={"my"}/> }
			{/* {menu === 3  &&   } */}

		</div>
			<table />
			<OfferedModal name={name} offers={offerList}/>
		</section>
    );
}

export default MyVideoList;