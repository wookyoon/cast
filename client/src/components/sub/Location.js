import React from 'react';
import Banner from '../main/Banner';
import VideoList from '../main/VideoList';
import VidModal from '../main/VidModal';
import Localist from './Localist';
import loginStore from '../../store/LoginStore';
import { useNavigate } from 'react-router-dom';
import Search from '../common/Search';

function Location() {
	const navigate = useNavigate();
	return (
		<section id='location'>
			<table />
			<Banner />
			<table />
			<Search />
			<Localist />
			{/* <VideoList /> */}
			<VidModal />
		</section>
	);
}

export default Location;
