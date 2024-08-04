import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import './Main.css';

function Header({ showLogout = true }) { // default값을 true로 설정
    const { isLoggedIn, onLogout } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout(); // 로그아웃 로직 호출
        navigate('/'); 
    };

    return (
        <header className="header">
            <Link to="/" className="link">
                <h1>FIND_ME</h1>
            </Link>

            {isLoggedIn && showLogout && (
                <div className="logout-container">
                    <Link 
                        to="/logout" 
                        className="logout-link" 
                        onClick={handleLogout}
                    >
                        로그아웃
                    </Link>
                </div>
            )}
        </header>
    );
}

export default Header;