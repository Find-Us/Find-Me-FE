import React, { useEffect, useState, useContext } from 'react';
import './Community.css';
import { Link } from 'react-router-dom';
import Header from './Header';
import { UserContext } from './UserContext';
import axios from 'axios';


const NavigationBar = () => {
    const { userImage, userName, userLevel, onLogout, onNavigate } = useContext(UserContext);

    const handleLogout = (e) => {
        e.preventDefault(); 
        onLogout(); 
        onNavigate('mainPage'); 
    };
    return (
        <nav className="navigation-bar">
            <div className="header">
                <img src={userImage} alt="User" className="user-image" />
                <div className="user-info">
                    <span className="username">{userName}</span>
                    <span className="user-level">{userLevel}</span>
                </div>
            </div>
            <div className="nav-buttons">
                <Link to="/" className="nav-link">홈</Link>
                <Link to="/profile" className="nav-link">마이 페이지</Link>
                <a href="#" className="nav-link" onClick={handleLogout}>
                    로그아웃
                </a>
            </div>
        </nav>
    );
};

const PostMain = ({ userImage, userName, userLevel, onNavigate }) => {
    const [posts, setPosts] = useState([]); 
    const token = 'YOUR_BEARER_TOKEN'; 

    // 게시글 목록 조회 함수
    const fetchPosts = async () => {
        try {
            const response = await axios.get('/api/posts/', {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPosts(response.data); // 응답 데이터로 상태 업데이트
        } catch (error) {
            console.error('게시글 조회 중 오류 발생:', error);
        }
    };

    // 컴포넌트가 마운트 될 때 게시글 목록 조회
    useEffect(() => {
        fetchPosts();
    }, []);
    return (
        <div className="post-main">
            <div className="content">
                <aside className="navigation">
                    <NavigationBar />
                </aside>
                <section className="post-list">
                    <div className="post-box">
                        {posts.map((post, index) => (
                            <div className="post-item" key={index} onClick={() => onNavigate('detail')}>
                                {post.title}
                            </div>
                        ))}
                    </div>
                </section>
                <div className="empty-box"></div>
            </div>
            <button onClick={() => onNavigate('write')} className="logout-link">작성하기</button>
        </div>
    );
};

const PostDetail = ({ userImage, userName, userLevel, onNavigate, postId }) => {
    const [postDetail, setPostDetail] = useState(null); // 게시글 상세 정보 상태
    const [comments, setComments] = useState([]); // 댓글 상태
    const [newComment, setNewComment] = useState(''); // 새 댓글 상태
    const token = 'YOUR_BEARER_TOKEN'; // 여기에 실제 Bearer 토큰 입력

    // 게시글 상세 정보 조회 함수
    const fetchPostDetail = async () => {
        try {
            const response = await axios.get(`/api/posts/${postId}/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPostDetail(response.data); // 응답 데이터로 상태 업데이트
        } catch (error) {
            console.error('게시글 상세 조회 중 오류 발생:', error);
        }
    };

    // 댓글 목록 조회 함수
    const fetchComments = async () => {
        try {
            const response = await axios.get(`/api/posts/${postId}/comments/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setComments(response.data);
        } catch (error) {
            console.error('댓글 조회 중 오류 발생:', error);
        }
    };

    // 새 댓글 작성 함수
    const handleCommentSubmit = async () => {
        if (newComment) {
            try {
                const response = await axios.post(`/api/posts/${postId}/comments/`, {
                    content: newComment,
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setComments([...comments, response.data]); // 새 댓글 추가
                setNewComment(''); // 입력 필드 초기화
            } catch (error) {
                console.error('댓글 작성 중 오류 발생:', error);
            }
        }
    };

    // 컴포넌트가 마운트 될 때 게시글 상세 정보와 댓글 조회
    useEffect(() => {
        fetchPostDetail();
        fetchComments();
    }, [postId]);

    return (
        <div className="post-main">
            <div className="content">
                <aside className="navigation">
                    <NavigationBar />
                </aside>

                <div className="post-detail">
                    {postDetail ? (
                        <>
                            <h2>{postDetail.title}</h2>
                            <p>작성자: {postDetail.author}</p>
                            <p>작성일: {postDetail.created_at}</p>
                            <p>수정일: {postDetail.updated_at}</p>
                            <p>내용: {postDetail.content}</p>
                            {postDetail.image && <img src={postDetail.image} alt="게시글 이미지" />}
                            <p>좋아요 수: {postDetail.like_count}</p>
                        </>
                    ) : (
                        <h2>게시글을 불러오는 중입니다...</h2>
                    )}
                </div>

                <div className="comments-section">
                    <h3>댓글</h3>
                    <div className="comments-list">
                        {comments.length > 0 ? (
                            comments.map(comment => (
                                <div key={comment.id} className="comment">
                                    <p>{comment.content}</p>
                                    <p>작성자: {comment.author}</p>
                                </div>
                            ))
                        ) : (
                            <p>댓글이 없습니다.</p>
                        )}
                    </div>
                    <textarea
                        placeholder="댓글을 작성하세요..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                    />
                    <button onClick={handleCommentSubmit}>댓글 작성</button>
                </div>
            </div>
        </div>
    )
};

const PostWrite = ({ userImage, userName, userLevel, onNavigate, onPostSubmit }) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const token = 'YOUR_BEARER_TOKEN'; // 여기에 실제 Bearer 토큰 입력

    const handleSubmit = async () => {
        if (title && content) {
            try {
                const response = await axios.post('/api/posts/', {
                    title,
                    content,
                    image: null, // 이미지 데이터를 추가할 경우 여기 수정
                }, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                // 게시글 작성 후 처리
                console.log('게시글 작성 성공:', response.data);
                setTitle('');
                setContent('');
                onNavigate('main'); // 작성 후 메인 페이지로 이동
            } catch (error) {
                console.error('게시글 작성 중 오류 발생:', error);
            }
        }
    };

    return (
        <div className="post-main">
            <div className="content">
                <aside className="navigation">
                    <NavigationBar />
                </aside>
                <div className="post-write">
                    <section className="write-post">
                        <input
                            type="text"
                            placeholder="제목"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder="내용"
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                        />
                        <button onClick={handleSubmit}>게시하기</button>
                    </section>
                </div>
                <div className="empty-box"></div>
            </div>
        </div>
    )
};

const Community = ({ onNavigateToMainPage }) => {
    const [currentPage, setCurrentPage] = useState('main');
    const [posts, setPosts] = useState([]);
    const userImage = 'user-image-url.jpg';
    const userName = '사용자 이름';
    const userLevel = '유저 레벨';

    const handlePostSubmit = (post) => {
        setPosts([...posts, post]);
    };

    const renderPage = () => {
        switch (currentPage) {
            case 'main':
                return <PostMain userImage={userImage} userName={userName} userLevel={userLevel} onNavigate={setCurrentPage} posts={posts} />;
            case 'detail':
                return <PostDetail />;
            case 'write':
                return <PostWrite userImage={userImage} userName={userName} userLevel={userLevel} onNavigate={setCurrentPage} onPostSubmit={handlePostSubmit} />;
            default:
                return <PostMain userImage={userImage} userName={userName} userLevel={userLevel} onNavigate={setCurrentPage} posts={posts} />;
        }
    };

    return (
        <>
            <header style={{ display: 'flex', flexDirection: 'column' }}>
                <div>
                    <Header showLogout={false} />
                </div>
            </header>

            <div className="community-container">
                {renderPage()}
            </div>
        </>
    );
};

export default Community;
