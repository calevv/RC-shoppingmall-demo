import './HeaderBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { useNavigate } from 'react-router-dom';
const HeaderBar = () => {
    const menuList = ['여성', 'Divided', '남성', '신생아/유아', '아동', 'Homewear', 'Sale', '지속가능성'];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };
    return (
        <div>
            <div className="top-area">
                <div className="search-part">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="search..." />
                </div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className="logo-area">제이 앤 제이</div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderBar;
