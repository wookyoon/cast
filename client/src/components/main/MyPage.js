import React, {useState, useEffect} from 'react';
import Intro from './Intro';
import VideoPostList from './VideoPostList';
import MyPageCastingList from './MyPageCastingList';
import CastingStore from '../../store/CastingStore';

function MyPage() {
	const [menu, setMenu] = useState(0);
	const [name, setName] = useState(localStorage.getItem("name"));
    const [saveCastingList, setSaveCastingsList] = useState();
    const [applyCastingList, setApplyCastingList] = useState();
    const [createCastingList, setCreateCastingList] = useState();
    const [isLoading, setLoading] = useState(true);

	useEffect(() => {
        CastingStore.getCastingList("save", name).then((results)=>{
			setLoading(false);
			setSaveCastingsList(results);
            // console.log()
        });
		CastingStore.getCastingList("apply", name).then((results)=>{
			setLoading(false);
			setApplyCastingList(results);
            // console.log()
        });
		CastingStore.getCastingList("created", name).then((results)=>{
			setLoading(false);
			setCreateCastingList(results);
            // console.log(results)
        });
	},[]);

    return (
		isLoading ? <p>Loading</p> :
        <section id='mypage'>
			<table />
			<Intro />
			<table />
			<div className='category'>
				<ul>
					<li onClick={()=>{setMenu(0)}}>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
                       <h1 style={{color:"white"}}>비디오 리스트</h1>
                    </div>
					</li>
					<li  onClick={()=>{setMenu(1) }}>
					<div  style={{ display: 'flex', flexDirection: 'row' }}>
                       <h1 style={{color:"white"}}> 지원 작품 리스트</h1>
                    </div>
					</li>
					<li onClick={()=>{ setMenu(2) }}>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
					<h1 style={{color:"white"}}>저장 작품 리스트</h1>
                    </div>
					</li>
					<li onClick={()=>{ setMenu(3)}}>
					<div style={{ display: 'flex', flexDirection: 'row' }}>
					<h1 style={{color:"white"}}>생성 작품 리스트</h1>
                    </div>
					</li>
				</ul>
			</div>

			{menu === 0  &&  <VideoPostList /> }
			{menu === 1  &&  <MyPageCastingList castings={applyCastingList} menu="apply" name={name}/> }
			{menu === 2  &&  <MyPageCastingList castings={saveCastingList} menu="save" name={name}/> }
			{menu === 3  &&  <MyPageCastingList castings={createCastingList} menu="created" name={name}/> }
			
			<table />
		</section>
    );
}

export default MyPage;