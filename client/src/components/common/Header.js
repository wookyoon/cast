import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header(props) {
	const active = { color: '#d5a869' };

	return (
		<header className={props.type}>
			<div className='inner'>
				<ul id='gnb'>
					<li>
						<NavLink activestyle={active} to='/login'>
							Login
						</NavLink>
					</li>
					<li>
						<NavLink activestyle={active} exact='true' to='/'>
							Main
						</NavLink>
					</li>
					<li>
						<NavLink activestyle={active} to='/feedback'>
							Feedback
						</NavLink>
					</li>
					<li>
						<NavLink activestyle={active} to='/upload'>
							Upload
						</NavLink>
					</li>
					<li>
						<NavLink activestyle={active} to='/mypage'>
							Mypage
						</NavLink>
					</li>
					<li>
						<a>
							<FontAwesomeIcon icon={faBars} />
						</a>
					</li>
				</ul>
			</div>
		</header>
	);
}

export default Header;
