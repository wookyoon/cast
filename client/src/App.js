import { Routes, Route } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/login/LoginPage';
import Main from './components/main/Main';
import MyPage from './components/sub/MyPage';
import MyPagewithData from './components/main/MyPage';
import Feedback from './components/sub/Feedback';
import Location from './components/sub/Location';

import VideoSearchList from './components/main/VideoSearchList';
import Upload from './components/content/UploadPage';
import CastingUpload from './components/content/CastingUpload';
import CastingList from './components/main/CastingList';
import UserPage from './components/main/UserPage';
import Actors from './components/sub/Actors';
import Mylist from './components/sub/Mylist';

import './scss/style.scss';

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<Main />} />
				<Route path='/search' element={<VideoSearchList />} />
				<Route path='/upload' exact element={<Upload />} />
				<Route path='/login' exact element={<Login />} />
				<Route path='/mypage' exact element={<MyPage />} />
				<Route path='/mypage/data' exact element={<MyPagewithData />} />
				<Route path='/userpage' exact element={<UserPage />} />
				<Route path='/casting' exact element={<CastingList />} />
				<Route path='/upload/casting' exact element={<CastingUpload />} />
				<Route path='/feedback' exact element={<Feedback />} />
				<Route path='/location' exact element={<Location />} />
				<Route path='/actors' exact element={<Actors />} />
				<Route path='/mylist' exact element={<Mylist />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
