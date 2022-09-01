import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ContentStore from '../../store/ContentStore';
import TagSearch from '../content/TagSearch';
import TagApi from '../../api/TagApi';
import { useNavigate } from 'react-router-dom';
import SearchList from '../main/VideoSearchList';
import { observer } from 'mobx-react';

function Search() {
	const [menu, setMenu] = useState();
	const [inputText, setinputText] = useState();
	const [dbtags, setDBTags] = useState();
	const navigate = useNavigate();

	useEffect(() => {
		TagApi.getTags().then(function (result) {
			setDBTags(result.tags);
		});
	}, []);

	const handleSearch = () => {
		if (menu === '2') {
			if (ContentStore.frommain) {
				navigate('/search?title=' + inputText);
				ContentStore.frommain = false;
			} else {
				ContentStore.getVideoList('title', inputText).then(() => {
					navigate('/search?title=' + inputText, SearchList);
				});
			}
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleEnter = (e) => {
		if (e.key === 'Enter') {
			console.log('enter');
			if (menu === '2') {
				if (ContentStore.frommain) {
					navigate('/search?title=' + inputText);
					ContentStore.frommain = false;
				} else {
					ContentStore.getVideoList('title', inputText).then(() => {
						navigate('/search?title=' + inputText, SearchList);
					});
				}
			}
		}
	};

	return (
		<>
			<div className='search'>
				<Form.Select
					className='category'
					aria-label='Default select example'
					onChange={(e) => {
						setMenu(e.target.value);
						ContentStore.setMenu(e.target.value);
					}}>
					{/* <option>Open this select menu</option> */}
					<option value='1'>태그</option>
					<option value='2'>제목</option>
					<option value='3'>계정</option>
				</Form.Select>
				<Form
					className='d-flex'
					onSubmit={(e) => handleSubmit(e)}
					onKeyPress={(e) => handleEnter(e)}>
					{menu === '1' ? (
						<TagSearch type={'video'} dbtags={dbtags} search={1} />
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
		</>
	);
}

export default observer(Search);
