import React from 'react';
import Banner from '../main/Banner';
import Work from './Work';
import { useNavigate } from 'react-router-dom';
import Search from '../common/Search';

function Feedback() {
	const navigate = useNavigate();

	return (
		<section id='feedback'>
			<table />
			<Banner />
			<table />
			<Search />
			<Work />
		</section>
	);
}

export default Feedback;
