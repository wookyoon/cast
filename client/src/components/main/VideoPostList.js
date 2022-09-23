import React,{useState, useEffect } from 'react';
import ContentStore from '../../store/ContentStore';
import VideoCard from './VideoCard';
import { Button } from 'semantic-ui-react';
import VideoModal from './VideoModal';
import Form from 'react-bootstrap/Form';
import categorys from '../../utils/videoCategory';
import recommendedTags from '../../utils/videoRecommendedTags';

function VideoPostList({videos}) {
    const [isLoading, setLoading] = useState(true);
    const [videoList, setVideoList] = useState(videos);
    const [inputText, setinputText] = useState();
    const [searchTags, setTags] = useState([]);
	  const [menu, setMenu] = useState('2');
  	const [name, setName] = useState(localStorage.getItem("name"));

    useEffect(() => {
    },[]);

    const handleDelete = (video) => {
      if (window.confirm("삭제하시겠습니까?") === true){ 
        console.log(video._id)
        ContentStore.deleteVideoList(video._id).then(()=>{
          setVideoList(ContentStore.deleteVideo(video.title));
          console.log("완료");
        });
      }else{
        console.log("취소");
      }
    }
    const handleOnClickTag = (tag) => {
      console.log(tag)
      ContentStore.getVideoList('mypage', tag, 'tag', name).then(() => {
        setVideoList(ContentStore.videos);
      });
    };
  
    const handleOnClickCategory = (category) => {
      ContentStore.getVideoList('mypage', category, 'category', name).then(() => {
        setVideoList(ContentStore.videos);
      });
    };
  
    const handleOnClickSort = (sort) => {
      ContentStore.getVideoList('mypage', sort, 'sort', name).then(() => {
        setVideoList(ContentStore.videos);
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
    };
  
    const handleDeleteTag = (tag) =>{
      setTags(searchTags.filter((item) => item !== tag));
      console.log(searchTags)
    }
	
    const handleEnter = (e) => {
      if (e.key === 'Enter') {
        console.log(menu)
        if (menu === '2') {
          ContentStore.getVideoList('mypage', inputText, 'title', name).then(() => {
            setVideoList(ContentStore.videos);
          });
        } else if (menu === '3') {
          ContentStore.getVideoList('mypage', inputText, 'name', name).then(() => {
            setVideoList(ContentStore.videos);
          });
        }
      }
    };
    return (
      <>
			<section id='actors'>
				<div className='category'>
					<ul>
						{categorys.map((category, i) => (
							<li key={i}>
							<Button  size='huge' color={category.color} inverted  onClick={() => handleOnClickCategory(category.category)}>
							{category.category}
							</Button>
						</li>
						))}
					</ul>
				</div>
				
			<div className='tags'>
				<ul>
				<Button size='large' inverted color='grey' onClick={()=>{handleOnClickTag('all');setTags([])}}>태그전체</Button>

                        {recommendedTags.map((tags, i)=>(
							<li>
							{tags.map((tag, i)=>(
								<Button.Group size='large'>
									{searchTags.includes(tag)?<Button inverted color='red' key={i} onClick={()=>handleDeleteTag(tag)}>{tag}
								</Button>:<Button  inverted color='grey' key={i} onClick={()=>setTags([...searchTags, tag])}>{tag}
								</Button> 
								 }
								</Button.Group>
							))}
						</li>
                        ))}
						<Button size='large' inverted  onClick={()=>handleOnClickTag(searchTags)}>검색</Button>
				</ul>
			</div>
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
						placeholder='검색어를 입력하세요'
						className='me-2'
						aria-label='Search'
						onChange={(e) => setinputText(e.target.value)}
					/>
				</Form>
					</li>
					<li>
						<Button inverted onClick={()=>handleOnClickSort("New")}>최신순</Button>
					</li>
					<li>
						<Button inverted onClick={()=>handleOnClickSort("Hit")}>조회순</Button>
					</li>
					<li>
						<Button inverted onClick={()=>handleOnClickSort("Like")}>인기순</Button>
					</li>
				</ul>
			</div>
			{videoList.map((video, idx) => (
				<div className='vid' key={idx}>
					<VideoCard video = {video} key = {idx} />
					<div className='tag'>
					{video.tag.map((tag, i) => (
						<Button size='mini'  onClick={()=>handleOnClickTag(tag)}>{tag}</Button>
					))}
					</div>
          {localStorage.getItem("name") === video.name && 
			<Button
			color='black'
			content='Delete'
			onClick={(e) => {handleDelete(video)}}
			/>}
				</div>
				))}
		</section>
		<VideoModal />
	</>
    );
}

export default VideoPostList; 