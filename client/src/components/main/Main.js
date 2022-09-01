import React, { useEffect } from 'react';
import Banner from './Banner';
import VideoList from './VideoList';
import VidModal from './VidModal';
import Video from './Video';
import loginStore from '../../store/LoginStore';
import { useNavigate } from 'react-router-dom';
import Search from '../common/Search';

function Main() {
	const navigate = useNavigate();

	return (
		<>
			<main>
				<table />
				<Banner />
				<table />
				<Search />
				<Video />
				{/* <VideoList /> */}
				<VidModal />
			</main>
		</>
	);
}

export default Main;
