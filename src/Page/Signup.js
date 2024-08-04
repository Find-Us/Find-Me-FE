import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'; 
import './Signup.css';

const Signup = () => {
    const [name, setName] = useState(''); 
    const [birthdate, setBirthdate] = useState('');
    const [email, setEmail] = useState(''); 
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState(''); 
    const [emailError, setEmailError] = useState(false); // 이메일 오류?
    const [passwordError, setPasswordError] = useState(false); // 비밀번호 오류?

        // 이메일 인증 함수
        const confirmEmail = async (token) => {
            try {
                const response = await axios.get(`/api/auth/confirm_email/${token}/`);
                if (response.status === 200) {
                    console.log('이메일 인증 성공:', response.data);
                }
            } catch (error) {
                console.error('이메일 인증 오류:', error);
            }
        };
    
        // 로그인 함수
        const login = async (data) => {
            try {
                const response = await axios.post('/api/quth/jwt/token/', data);
                if (response.status === 200) {
                    console.log('로그인 성공:', response.data);
                }
            } catch (error) {
                console.error('로그인 오류:', error);
            }
        };
        
    const handleSignup = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            alert('아이디와 비밀번호를 입력해 주세요.');
            return;
        }

        if (password !== confirmPassword) {
            setPasswordError(true);
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        const userData = { name, birthdate, email, username, password };

        try {
            const response = await axios.post('http://localhost:8000/api/auth/register/', userData);
            console.log('회원가입 성공:', response.data);
        } catch (error) {
            console.error('회원가입 실패:', error.response.data);
        }
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleEmailChange = (e) => {
        const value = e.target.value;
        setEmail(value);
        setEmailError(!validateEmail(value)); 
    };

    const handlePasswordChange = (e) => {
        const value = e.target.value;
        setPassword(value); 
        setPasswordError(false); 
    };

    const handleConfirmPasswordChange = (e) => {
        const value = e.target.value;
        setConfirmPassword(value); 
        setPasswordError(password !== value); 
    };

    return (
        <div className="signup-page">
            <div className="signup-container">
                <h2>Sign Up</h2>
                <p className="subtitle">간단한 회원가입을 마치고 다양한 기능을 즐기세요</p>
                <div className="input-container">
                    <form onSubmit={handleSignup}>
                        <div className="input-group">
                            <label htmlFor="name">이름</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="birthdate">생년월일</label>
                            <input
                                type="date"
                                id="birthdate"
                                value={birthdate}
                                onChange={(e) => setBirthdate(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">이메일</label>
                            <input
                                className={`inputlong ${emailError ? 'error' : ''}`}
                                type="email"
                                id="email"
                                value={email}
                                onChange={handleEmailChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="username">아이디</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">비밀번호</label>
                            <input
                                className={`inputlong ${passwordError ? 'error' : ''}`}
                                type="password"
                                id="password"
                                value={password}
                                onChange={handlePasswordChange}
                                required
                            />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">비밀번호 확인</label>
                            <input
                                className={`inputlong ${passwordError ? 'error' : ''}`}
                                type="password"
                                id="confirmPassword"
                                value={confirmPassword}
                                onChange={handleConfirmPasswordChange}
                                required
                            />
                        </div>
                        <button type="submit" className="signup-button">회원가입 완료하기!</button>
                    </form>
                    <div className="separator"></div>
                </div>
                <p className="signup-text">
                    <Link to="/login" className="login-link">계정이 이미 있으신가요?</Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
