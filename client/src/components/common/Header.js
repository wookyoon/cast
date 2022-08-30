import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneLines } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faUserTie } from '@fortawesome/free-solid-svg-icons';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';
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
								<FontAwesomeIcon icon={faMasksTheater} /> <h1>cast</h1>
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
								<FontAwesomeIcon icon={faMicrophoneLines} />
							</NavLink>
						</li>
						<li>
							<NavLink activestyle={active} to='/upload'>
								<FontAwesomeIcon icon={faPenToSquare} />
							</NavLink>
						</li>
						<li>
							<NavLink activestyle={active} to='/feedback'>
								<FontAwesomeIcon icon={faUserTie} />
							</NavLink>
						</li>
						<li>
							<NavLink activestyle={active} to='/mypage'>
								<FontAwesomeIcon icon={faUserAstronaut} />
							</NavLink>
						</li>
					</div>
				</ul>
			</div>
		</header>
	);
}

export default Header;
