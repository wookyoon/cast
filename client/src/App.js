import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Login from './components/login/LoginPage';
import Main from './components/main/Main';
import MyPage from './components/sub/MyPage';
import './scss/style.scss';
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path='/' exact element={<Main />} />

				<Route path='/login' exact element={<Login />} />
				<Route path='/mypage' exact element={<MyPage />} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
