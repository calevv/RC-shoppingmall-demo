import './HeaderBar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
const HeaderBar = () => {
    const menuList = ['All', 'Wemen', 'Men', 'Kids', 'Home'];
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login');
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyWord = event.target.value;
            console.log(keyWord);
            navigate(`/?q=${keyWord}`);
        }
    };
    return (
        <div>
            <div className="top-area">
                <div className="search-part">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="search..." onKeyDown={(event) => search(event)} />
                </div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>로그인</div>
                </div>
            </div>
            <div className="logo-area">
                <Link to="/">제이 앤 제이</Link>
            </div>
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
