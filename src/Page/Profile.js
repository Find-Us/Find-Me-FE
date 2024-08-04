import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import './Profile.css';
import { UserContext } from './UserContext';

const Profile = () => {
    const { userImage, userName, userLevel, setUserDetails } = useContext(UserContext);
    const [isEditing, setIsEditing] = useState(false);
    const [introduction, setIntroduction] = useState('자기소개 입니다.');
    const [bookmarks, setBookmarks] = useState([]);
    const [savedContents, setSavedContents] = useState([]);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = async () => {
        setUserDetails(prev => ({
            ...prev,
            introduction,
            bookmarks: prev.bookmarks.filter(bookmark => !bookmark.selected)
        }));

        setIsEditing(false);
        setBookmarks(prevBookmarks => prevBookmarks.filter(bookmark => !bookmark.selected));
    };

    const handleCheckboxChange = (id) => {
        setBookmarks(prevBookmarks =>
            prevBookmarks.map(bookmark =>
                bookmark.id === id ? { ...bookmark, selected: !bookmark.selected } : bookmark
            )
        );
    };

    // 유저 프로필 조회 함수
    const getUserProfile = async () => {
        try {
            const response = await axios.get('/api/auth/profile/');
            if (response.status === 200) {
                console.log('유저 프로필:', response.data);
            }
        } catch (error) {
            console.error('프로필 조회 오류:', error);
        }
    };


    // 컨텐츠 저장 함수
    const saveContent = async (bookmark) => {
        const data = {
            nickname: '사용자닉네임',
            content_type: 'movie',
            title: bookmark.title,
            actors: bookmark.actors || '',
            author: bookmark.author || '',
            singer: bookmark.singer || '',
            description: bookmark.description || '',
            image_url: bookmark.image_url || '',
        };

        try {
            const response = await axios.post('/Recommend/Save/', data);
            if (response.status === 200) {
                console.log('컨텐츠 저장 성공:', response.data);
            }
        } catch (error) {
            console.error('컨텐츠 저장 오류:', error);
        }
    };

    // 저장된 컨텐츠 조회 함수
    const getSavedContents = async (nickname) => {
        try {
            const response = await axios.get(`/Recommend/Get_saved/${nickname}/`);
            if (response.status === 200) {
                setSavedContents(response.data);
            }
        } catch (error) {
            console.error('저장된 컨텐츠 조회 오류:', error);
        }
    };

    // 저장된 컨텐츠 삭제 함수
    const deleteContent = async (nickname, title) => {
        const data = {
            nickname,
            title,
        };

        try {
            const response = await axios.delete('/Recommend/Delete/', { data });
            if (response.status === 200) {
                console.log('컨텐츠 삭제 성공:', response.data);
                getSavedContents(nickname);
            }
        } catch (error) {
            console.error('컨텐츠 삭제 오류:', error);
        }
    };

    // 컴포넌트가 마운트 될 때 저장된 컨텐츠 조회
    useEffect(() => {
        const nickname = '사용자닉네임'
        getSavedContents(nickname);
        getUserProfile(); // 유저 프로필
    }, []);

    return (
        <div className="mypage-container">
            <header className="mypage-header">
                <h1>My Page</h1>
            </header>
            <section className="profile-section">
                <h2>Profile</h2>
                <div className="profile-info">
                    {userImage && <img src={userImage} alt="사용자 이미지" />}
                    <div className="username-level">
                        <p>{userName}</p>
                        <p>레벨: {userLevel}</p>
                    </div>
                </div>
                {isEditing ? (
                    <div>
                        <textarea
                            value={introduction}
                            onChange={(e) => setIntroduction(e.target.value)}
                            rows="3"
                        />
                    </div>
                ) : (
                    <p className="introduction">{introduction}</p>
                )}
            </section>
            <section className="bookmark-section">
                <h2>Bookmark</h2>
                <ul className="bookmark-list">
                    {bookmarks.map(bookmark => (
                        <li key={bookmark.id} className="bookmark-item">
                            {isEditing ? (
                                <input
                                    type="checkbox"
                                    className="custom-checkbox"
                                    checked={bookmark.selected}
                                    onChange={() => handleCheckboxChange(bookmark.id)}
                                />
                            ) : (
                                <span className="bookmark-icon">⭐</span>
                            )}
                            <span className="bookmark-title">{bookmark.title}</span>
                            <span className="bookmark-details">{bookmark.details}</span>
                            <button onClick={() => saveContent(bookmark)}>저장</button>
                        </li>
                    ))}
                </ul>
            </section>

            <ul className="saved-contents-list">
                {savedContents.map(content => (
                    <li key={content.title} className="saved-content-item">
                        <span className="content-title">{content.title}</span>
                        <button onClick={() => deleteContent(content.nickname, content.title)}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Profile;
