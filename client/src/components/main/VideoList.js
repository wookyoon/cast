import React, { useEffect, useState } from 'react';
import VideoModal from './VideoModal';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import Form from 'react-bootstrap/Form';

import ContentStore from '../../store/ContentStore';
import VideoCard from './VideoCard';
import { observer } from 'mobx-react';
import { useNavigate } from 'react-router-dom';
import recommendedTags from '../../utils/videoRecommendedTags';
import categorys from '../../utils/videoCategory';
import sorting from '../../utils/videoSort';
import { Button } from 'semantic-ui-react';
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import Search from '../common/Search';

function VideoList() {
	const [isLoading, setLoading] = useState(true);
	const [menu, setMenu] = useState('2');
	const [videoList, setVideoList] = useState();
	const [inputText, setinputText] = useState();
	const [searchTags, setTags] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		ContentStore.getVideoList('전체').then(() => {
			setLoading(false);
			setVideoList(ContentStore.videos);
		});
		console.log(ContentStore.videos);
	}, []);

	const handleOnClickTag = (tag) => {
		console.log(tag);
		ContentStore.getVideoList('tag', tag).then(() => {
			setVideoList(ContentStore.videos);
		});
	};

	const handleOnClickCategory = (category) => {
		ContentStore.getVideoList('category', category).then(() => {
			setVideoList(ContentStore.videos);
		});
	};

	const handleOnClickSort = (sort) => {
		ContentStore.getVideoList('sort', sort).then(() => {
			setVideoList(ContentStore.videos);
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleDeleteTag = (tag) => {
		setTags(searchTags.filter((item) => item !== tag));
		console.log(searchTags);
	};
	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			console.log(menu);
			if (menu === '2') {
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
			<section id='actors'>
				<div className='search'>
					<ul>
						<li>
							<Form.Select
								className='category'
								aria-label='Default select example'
								onChange={(e) => {
									setMenu(e.target.value);
								}}>
								<option value='2'>제목</option>
								<option value='3'>계정</option>
							</Form.Select>
							<Form
								className='d-flex'
								onSubmit={(e) => handleSubmit(e)}
								onKeyPress={(e) => handleEnter(e)}>
								<Form.Control
									type='search'
									placeholder='&nbsp;검색어를 입력하세요'
									className='me-2'
									aria-label='Search'
									onChange={(e) => setinputText(e.target.value)}
								/>
							</Form>
						</li>
						<li>
							<Button inverted onClick={() => handleOnClickSort('New')}>
								최신순
							</Button>
						</li>
						<li>
							<Button inverted onClick={() => handleOnClickSort('Hit')}>
								조회순
							</Button>
						</li>
						<li>
							<Button inverted onClick={() => handleOnClickSort('Like')}>
								인기순
							</Button>
						</li>
					</ul>
				</div>
				<div className='category'>
					<ul>
						{categorys.map((category, i) => (
							<li key={i}>
								<Button
									size='huge'
									color={category.color}
									inverted
									onClick={() => handleOnClickCategory(category.category)}>
									{category.category}
								</Button>
							</li>
						))}
					</ul>
				</div>
				<div className='tags'>
					<ul>
						<Button
							size='large'
							inverted
							color='grey'
							onClick={() => {
								handleOnClickTag('all');
								setTags([]);
							}}>
							태그전체
						</Button>

						{recommendedTags.map((tags, i) => (
							<li>
								{tags.map((tag, i) => (
									<Button.Group size='large'>
										{searchTags.includes(tag) ? (
											<Button
												inverted
												color='red'
												key={i}
												onClick={() => handleDeleteTag(tag)}>
												{tag}
											</Button>
										) : (
											<Button
												inverted
												color='grey'
												key={i}
												onClick={() => setTags([...searchTags, tag])}>
												{tag}
											</Button>
										)}
									</Button.Group>
								))}
							</li>
						))}
						<Button
							size='large'
							color='red'
							onClick={() => handleOnClickTag(searchTags)}>
							검색
						</Button>
					</ul>
				</div>
				{videoList.map((video, idx) => (
					<div className='vid' key={idx}>
						<VideoCard video={video} key={idx} />
						<div className='tag'>
							{video.tag.map((tag, i) => (
								<Button size='mini' onClick={() => handleOnClickTag(tag)}>
									{tag}
								</Button>
							))}
						</div>
					</div>
				))}
			</section>
			<VideoModal />
		</>
	);
}

export default observer(VideoList);
