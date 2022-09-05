import React, { useEffect, useState } from 'react';
import VideoModal from './VidModal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Form from 'react-bootstrap/Form';
import TagSearch from '../content/TagSearch';

import ContentStore from '../../store/ContentStore';
import VideoCard from './VideoCard';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import recommendedTags from '../../utils/videoRecommendedTags';
import categorys from '../../utils/videoCategory';
const path = process.env.PUBLIC_URL;

function VideoList() {
	let [modal, setModal] = useState(false);
	const [isLoading, setLoading] = useState(true);
	const [menu, setMenu] = useState('1');
	const [videoList, setVideoList] = useState();
	const [inputText, setinputText] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		ContentStore.getVideoList('전체').then(() => {
			setLoading(false);
			setVideoList(ContentStore.videos);
		});
		console.log(ContentStore.videos);
	}, []);

	const handleOnClickTag = (tag) => {
		ContentStore.getVideoList('tag', tag).then(() => {
			setVideoList(ContentStore.videos);
		});
	};

	const handleOnClickCategory = (category) => {
		ContentStore.getVideoList('category', category).then(() => {
			setVideoList(ContentStore.videos);
		});
	};

	// const searchByTag = (tag) => {
	// 	navigate('/search?tag=' + tag);
	// };

	const handleSearch = () => {
		if (menu === '2') {
			ContentStore.getVideoList('title', inputText).then(() => {
				setVideoList(ContentStore.videos);
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			if (menu === '1') {
				ContentStore.getVideoList('tag', ContentStore.tags).then(() => {
					setVideoList(ContentStore.videos);
				});
			} else if (menu === '2') {
				ContentStore.getVideoList('title', inputText).then(() => {
					setVideoList(ContentStore.videos);
				});
			} else if (menu === '3') {
				ContentStore.getVideoList('name', inputText).then(() => {
					setVideoList(ContentStore.videos);
				});
			}
		}
	};

	return isLoading ? (
		<p>Loading</p>
	) : (
		<>
			<div className='search'>
				<Form.Select
					className='category'
					aria-label='Default select example'
					onChange={(e) => {
						setMenu(e.target.value);
					}}>
					<option value='1'>태그</option>
					<option value='2'>제목</option>
					<option value='3'>계정</option>
				</Form.Select>
				<Form
					className='d-flex'
					onSubmit={(e) => handleSubmit(e)}
					onKeyPress={(e) => handleEnter(e)}>
					{menu === '1' ? (
						<TagSearch />
					) : (
						<Form.Control
							type='search'
							placeholder='검색어를 입력하세요'
							className='me-2'
							aria-label='Search'
							onChange={(e) => setinputText(e.target.value)}
						/>
					)}
				</Form>
			</div>
			<section id='video'>
				<div className='category'>
					<ul>
						<li>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								{categorys.map((category, i) => (
									<div key={i}>
										<h1 key={i} onClick={() => handleOnClickCategory(category)}>
											{' '}
											{category}
										</h1>
										&nbsp; &nbsp; &nbsp;
									</div>
								))}
							</div>
						</li>
					</ul>
				</div>
				<div className='tags'>
					<ul>
						<li>
							<div style={{ display: 'flex', flexDirection: 'row' }}>
								{recommendedTags.map((tag, i) => (
									<div key={i}>
										<h2 onClick={() => handleOnClickTag(tag)}>#{tag}</h2>
										&nbsp; &nbsp; &nbsp;
									</div>
								))}
							</div>
						</li>
					</ul>
				</div>
				{videoList.map((video, idx) => (
					<VideoCard video={video} key={idx} />
				))}
			</section>
			<VideoModal />
		</>
	);
}

export default observer(VideoList);
