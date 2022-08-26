import React, { useEffect }  from 'react';
import Banner from './Banner';
import VideoList from './VideoList';
import loginStore from '../../store/LoginStore';
import { useNavigate  } from 'react-router-dom';

function Main() {
	const navigate = useNavigate();

	const logout = () => {
		loginStore.isLoggedIn=false
		console.log(loginStore.isLoggedIn)
		localStorage.clear();
		navigate('/');
	  };

	return (
		<>
			<main>
				<button onClick={()=>logout()}>Logout</button>
				<Banner />
				<VideoList />
			</main>
		</>
	);
}

export default Main;
