import React from 'react';
import Intro from './Intro';
import VideoPostList from './VideoPostList';

function MyPage(props) {
    return (
        <section id='mypage'>
			<table />
			<Intro />
			<table />
			<VideoPostList />
			<table />
		</section>
    );
}

export default MyPage;