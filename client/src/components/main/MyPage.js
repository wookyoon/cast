import React, {useState, useEffect} from 'react';
import Intro from './Intro';
import VideoPostList from './VideoPostList';
import MyPageCastingList from './MyPageCastingList';

function MyPage() {
	const [menu, setMenu] = useState(0);
	const [name, setName] = useState(localStorage.getItem("name"));
	
    return (
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
			{menu === 1  &&  <MyPageCastingList menu="apply" name={name}/> }
			{menu === 2  &&  <MyPageCastingList menu="save" name={name}/> }
			{menu === 3  &&  <MyPageCastingList menu="created" name={name}/> }
			
			<table />
		</section>
    );
}

export default MyPage;