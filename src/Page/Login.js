import React, { useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import { UserContext } from './UserContext';
import axios from 'axios';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { setIsLoggedIn, setUserDetails } = useContext(UserContext); // context에서 값 가져오기

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginData = {
            username,
            password,
        };

        try {
            const response = await axios.post('http://localhost:8000/api/auth/login/', loginData);
            console.log('로그인 성공:', response.data);

            // 사용자 정보 및 토큰 설정
            setUserDetails(response.data.user); // UserContext에 사용자 정보 저장
            setIsLoggedIn(true); // 로그인 상태 업데이트

            navigate('/');

        } catch (error) {
            console.error('로그인 실패:', error.response.data);
            alert('존재하지 않는 계정이거나, 아이디/비밀번호가 잘못되었습니다.');
        }
    };

    return (
        <div className="login-page">
            <div className="login-container">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <label htmlFor="username">아이디</label>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                    <label htmlFor="password">비밀번호</label>
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />
                    <button type="submit" className="login-button">로그인</button>
                </form>
                <div className="separator"></div>
                <p>
                    계정이 없으신가요? <Link to="/signup" className="signup-link">Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
