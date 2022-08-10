import { Routes, Route} from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/login/LoginPage';
import Main from './components/main/Main';
import MyPage from './components/sub/MyPage';
import VideoSearchList from './components/main/VideoSearchList';
import Upload from './components/content/UploadPage';
import './scss/style.scss';
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<Main />} />
				<Route path="/search" exact element={<VideoSearchList  />}/>
				<Route path="/upload" exact element={<Upload  />}/>
				<Route path='/login' exact element={<Login />} />
				<Route path='/mypage' exact element={<MyPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
