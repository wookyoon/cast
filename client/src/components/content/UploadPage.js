import React, { useState, useEffect } from 'react';
import { Typography, Button, Input } from 'antd';
import ContentStore from '../../store/ContentStore';
import AWS from 'aws-sdk';
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons';
import Form from 'react-bootstrap/Form';
import TagSearch from './TagSearch';
import recommendedTags from '../../utils/videoRecommendedTags';

const { Title } = Typography;

function UploadPage() {
	const [title, setTitleValue] = useState('');
	const [Video, setVideo] = useState();
	const [Image, setImage] = useState();
	const [VideoName, setVideoName] = useState('');
	const [ImageName, setImageName] = useState('');
	const [VideoSize, setVideoSize] = useState();
	const [ImageSize, setImageSize] = useState();
	const [VideoDuration, setVideoDuration] = useState();
	const [category, setCategory] = useState('자기소개');
	const [share, setShare] = useState();
    const [searchTags, setTags] = useState([]);

	const titleTest = () => {
		var special_pattern = /[`~!@#$%^&*|\\\'\";:\/?]/gi;
		// var blank_pattern = /[\s]/g;

		if (special_pattern.test(title) === true) {
			return true;
		}  else {
			return false;
		}
	};

	const handleDeleteTag = (tag) =>{
		setTags(searchTags.filter((item) => item !== tag));
	}

	const region = 'ap-northeast-2';

	AWS.config.update({
		region: region,
		accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
		secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
	});

	const onSubmit = async (event) => {
		event.preventDefault();
		console.log(category);
		console.log(share);

		if (VideoName.split('.')[1] !== 'mp4') {
			return alert('mp4 파일만 가능합니다.');
		}

		if (
			ImageName.split('.')[1] !== 'jpg' &&
			ImageName.split('.')[1] !== 'jpeg'
		) {
			return alert('jpg or jpeg 파일만 가능합니다.');
		}

		if (!title || !Video || !Image ) {
			return alert('fill all the fields first!');
		}

		if (titleTest()) {
			return alert('특수문자가 입력되었습니다.')
		} else if (VideoSize > 10000000) {
			// 얼마나 남았는지 보여주고 넘기면 업로드안되게
			return alert('동영상 사이즈가 10MB이상입니다');
		} else if (VideoDuration > 60) {
			return alert('동영상 길이가 1분 이상입니다');
		} else if (ImageSize > 1000000) {
			// 얼마나 남았는지 보여주고 넘기면 업로드안되게
			return alert('동영상 사이즈가 1MB이상입니다');
		} else {
			let now = new Date();
			let y = now.getFullYear();
			let m = now.getMonth() + 1;
			let d = now.getDate();
			console.log(ContentStore.tags);
			const created = y.toString() + '.' + m.toString() + '.' + d.toString();

			const data = {
				tag: searchTags,
				name: localStorage.getItem('name'),
				title: title,
				videoUrl:
					'https://mern-feedback.s3.ap-northeast-2.amazonaws.com/' +
					localStorage.getItem('name') +
					'/videos/' +
					title +
					'.mp4',
				imageUrl:
					'https://mern-feedback.s3.ap-northeast-2.amazonaws.com/' +
					localStorage.getItem('name') +
					'/images/' +
					title +
					'.jpeg',
				category: category,
				created: created,
				videoShare: share,
			};
			console.log(data);

			ContentStore.contentUpload(data).then((result) => {
				console.log('*', result);
				if (result === 'Success') {
					const videoUpload = new AWS.S3.ManagedUpload({
						params: {
							Bucket: 'mern-feedback',
							Key: localStorage.getItem('name') + '/videos/' + title + '.mp4',
							Body: Video,
							ACL: 'public-read',
							ContentType: 'video/mp4',
						},
					});

					const imageUpload = new AWS.S3.ManagedUpload({
						params: {
							Bucket: 'mern-feedback',
							Key: localStorage.getItem('name') + '/images/' + title + '.jpeg',
							Body: Image,
							ACL: 'public-read',
							ContentType: 'image/jpeg',
						},
					});
					videoUpload.promise();
					imageUpload.promise();
				} else if (result === 'Dupicate Title') {
					return alert('동일한 Title이 존재합니다.');
				} else if (result === 'max') {
					return alert('Video는 4개까지 업로드가능합니다');
				}
			});
		}
	};

	const onVideoDrop = (file) => {
		setVideo(file[0]);
		setVideoName(file[0].name);
		setVideoSize(file[0].size);

		Object.assign(file[0], {
			preview: URL.createObjectURL(file[0]),
		});

		const video = document.createElement('video');
		video.src = file[0].preview;
		video.addEventListener('loadedmetadata', () => {
			setVideoDuration(video.duration);
		});
		//  1903312 == 1.9mb
	};

	const onImageDrop = (file) => {
		setImage(file[0]);
		setImageName(file[0].name);
		setImageSize(file[0].size);
	};

	return (
		<div style={{ maxWidth: '700px', margin: '2rem auto' }}>
			<div style={{ textAlign: 'center', marginBottom: '2rem' }}>
				<Title level={2}> Upload Video</Title>
			</div>

			<Form onSubmit={onSubmit}>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<label>Video</label>
					<br />
					<Dropzone onDrop={onVideoDrop} multiple={false} maxSize={55000000}>
						{({
							getRootProps,
							getInputProps,
							isDragActive,
							isDragReject,
							acceptedFiles,
							rejectedFiles,
						}) => (
							<div
								style={{
									width: '300px',
									height: '240px',
									border: '1px solid lightgray',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								{...getRootProps()}>
								<input {...getInputProps()} />

								<PlusOutlined tyle={{ fontSize: '3rem' }} />
							</div>
						)}
					</Dropzone>
					<div style={{ display: 'flex', width: '350px', height: '240px' }}>
						{VideoName}
						<br />
						{VideoSize}
						<br />
						{VideoDuration}
					</div>
					<label>ThumbNail</label>
					<br />
					<Dropzone onDrop={onImageDrop} multiple={false} maxSize={55000000}>
						{({
							getRootProps,
							getInputProps,
							isDragActive,
							isDragReject,
							acceptedFiles,
							rejectedFiles,
						}) => (
							<div
								style={{
									width: '300px',
									height: '240px',
									border: '1px solid lightgray',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
								}}
								{...getRootProps()}>
								<input {...getInputProps()} />

								<PlusOutlined tyle={{ fontSize: '3rem' }} />
							</div>
						)}
					</Dropzone>
					<div style={{ display: 'flex', width: '350px', height: '240px' }}>
						{ImageName}
						<br />
						{ImageSize}
					</div>
				</div>

				<br />
				<br />
				<label>Title</label>
				<Input
					onChange={(e) => {
						setTitleValue(e.target.value);
					}}
					value={title}
				/>
				<br />
				<br />
				<label>Tags</label>
				{/* <TagSearch /> */}
				<div className='tags'>
				<ul>
                        {recommendedTags.map((tags, i)=>(
							<li>
							{tags.map((tag, i)=>(
								<Button.Group size='large'>
									{searchTags.includes(tag)?<Button inverted color='red' key={i} onClick={()=>handleDeleteTag(tag)}>{tag}
								</Button>:<Button  inverted color='grey' key={i} onClick={()=>{setTags([...searchTags, tag]);console.log(searchTags)}}>{tag}
								</Button> 
								 }
								</Button.Group>
							))}
						</li>
                        ))}
				</ul>
			</div>

				<br />
				<br />

				<label>카테고리</label>
				<Form.Select
					className='category'
					aria-label='Default select example'
					onChange={(e) => {
						setCategory(e.target.value);
					}}>
					<option value='자기소개'>자기소개</option>
					<option value='자유연기'>자유연기</option>
					<option value='감정연기'>감정연기</option>
					<option value='독백'>독백</option>
					<option value='모사'>모사</option>
					<option value='특기'>특기</option>
					<option value='기타'>기타</option>
				</Form.Select>
				<br />
				<br />
				<label>비디오 공개</label>
				<Form.Select
					className='category'
					aria-label='Default select example'
					onChange={(e) => {
						setShare(e.target.value);
					}}>
					<option value='0'>public</option>
					<option value='1'>follower</option>
					<option value='2'>private</option>
				</Form.Select>

				<Button onClick={onSubmit}>Submit</Button>
			</Form>
		</div>
	);
}

export default UploadPage;
