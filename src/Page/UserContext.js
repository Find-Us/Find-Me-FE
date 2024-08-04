import React, { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [userImage, setUserImage] = useState('');
    const [userName, setUserName] = useState('');
    const [userLevel, setUserLevel] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userDetails, setUserDetails] = useState({
        userImage: '',
        userName: '',
        userLevel: '',
        introduction: '',
        bookmarks: []
    });

    const toggleLogin = () => {
        setIsLoggedIn(prev => !prev); // 예시
    };

    const navigate = useNavigate();
    // const API_URL = '여기에_API_URL을_입력하세요';

    const onNavigate = (path) => {
        navigate(path);
    };

    const onLogout = async () => {
        try {
            // await axios.post(`${API_URL}/logout/`);

            // 사용자 정보 초기화
            setUserImage('');
            setUserName('');
            setUserLevel('');
            setIsLoggedIn(false); // 로그아웃 상태로 변경
            setUserDetails({
                userImage: '',
                userName: '',
                userLevel: '',
                introduction: '',
                bookmarks: []
            });

            navigate('/'); // 메인 페이지
        } catch (error) {
            console.error('로그아웃 실패:', error);
        }
    };

    return (
        <UserContext.Provider value={{ toggleLogin, userImage, userName, userLevel, isLoggedIn, userDetails, onNavigate, onLogout }}>
            {children}
        </UserContext.Provider>
    );
};
