import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';

function Header(props) {
	const active = { color: '#d5a869' };

	return (
		<header className={props.type}>
			<div className='inner'>
				<ul id='gnb'>
					<div className='logo'>
						<li>
							<NavLink activestyle={active} to='/login'>
								{/* <FontAwesomeIcon icon={faMasksTheater} />  */}
								<h1>KineDb</h1>
							</NavLink>
						</li>
					</div>
					<div className='search'>
						<li>
							<Search />
						</li>
					</div>
					<div className='menu'>
						<li>
							<NavLink activestyle={active} exact='true' to='/'>
								{/* <FontAwesomeIcon icon={faMicrophoneLines} /> */}
								<h1>배우</h1>
							</NavLink>
						</li>
						{/* <li>
							<NavLink activestyle={active} to='/upload'>
								<FontAwesomeIcon icon={faPenToSquare} />
								<h1>게시</h1>
							</NavLink>
						</li> */}
						<li>
							<NavLink activestyle={active} to='/feedback'>
								{/* <FontAwesomeIcon icon={faUserTie} /> */}
								<h1>작품</h1>
							</NavLink>
						</li>
						<li>
							<NavLink activestyle={active} to='/mypage'>
								{/* <FontAwesomeIcon icon={faUserAstronaut} /> */}
								<h1>프로필</h1>
							</NavLink>
						</li>
					</div>
				</ul>
			</div>
		</header>
	);
}

export default Header;
