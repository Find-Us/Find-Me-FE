// main.js
import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Main.css';
import Header from './Header';
import { UserContext } from './UserContext';

const Main = () => {
	const { isLoggedIn, userName, onLogout, toggleLogin } = useContext(UserContext);

	return (
		<>
			<header style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
				<Header />
				<div style={{ height: '3px', backgroundColor: '#D3D3D3', width: '100%' }}></div>
				<div style={{ padding: '20px' }}></div>
			</header>

			<div>
				<button onClick={toggleLogin}>임시 로그인</button>
			</div>

			{isLoggedIn ? (
				<div className="loginstyle">
					<h5>Personalized Recommendations & Share</h5>
					<div className="title">Find Yourself <br />by Culture Life</div>
					<div className="msubtitle">당신의 내면을 탐험하고, 맞춤형 추천을 통해
						<br />마음의 여정을 떠나보세요
						<br />새로운 이야기와 세계가 당신을 기다립니다!</div>
				</div>
			) : (
				<div className="notloginstyle">
					<h5>Personalized Recommendations & Share</h5>
					<div className="title">Find Yourself by Culture Life</div>
					<div className="msubtitle">당신의 내면을 탐험하고, 맞춤형 추천을 통해 마음의 여정을 떠나보세요
						<br />새로운 이야기와 세계가 당신을 기다립니다!</div>
				</div>
			)}

<div style={{ position: 'relative', height: '100vh' }}>
				<img
					src={process.env.PUBLIC_URL + '/draw1.png'}
					alt="Draw 1"
					className={`image ${isLoggedIn ? 'logged-in draw1' : 'not-logged-in draw1'}`}
				/>
				<img
					src={process.env.PUBLIC_URL + '/draw2.png'}
					alt="Draw 2"
					className={`image ${isLoggedIn ? 'logged-in draw2' : 'not-logged-in draw2'}`}
				/>
				<img
					src={process.env.PUBLIC_URL + '/draw3.png'}
					alt="Draw 3"
					className={`image ${isLoggedIn ? 'logged-in draw3' : 'not-logged-in draw3'}`}
				/>
				<img
					src={process.env.PUBLIC_URL + '/draw4.png'}
					alt="Draw 4"
					className={`image ${isLoggedIn ? 'logged-in draw4' : 'not-logged-in draw4'}`}
				/>
			</div>

			{isLoggedIn ? (
				<div className="button-container-login" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Link to="/testpage" className="ybutton_test">테스트</Link>
					<Link to="/community" className="ybutton_com">커뮤니티</Link>
				</div>
			) : (
				<div className="button-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<Link to="/testpage" className="nbutton_test">테스트</Link>
					<Link to="/login" className="nbutton_log">로그인</Link>
				</div>
			)}
		</>
	);
};

export default Main;