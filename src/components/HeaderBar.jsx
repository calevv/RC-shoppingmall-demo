import './HeaderBar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const HeaderBar = ({ authenticate, setAuthenticate }) => {
    const menuList = ['All', 'Women', 'Men', 'Kids', 'Home'];
    const navigate = useNavigate();
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
    const [query] = useSearchParams();
    const currentCategory = query.get('category');

    const toggleSideMenu = () => {
        setIsSideMenuOpen(!isSideMenuOpen);
    };

    const closeSideMenu = () => {
        setIsSideMenuOpen(false);
    };

    const goToLogin = () => {
        if (authenticate) {
            setAuthenticate(false);
        } else {
            navigate('/login');
        }
    };

    const search = (event) => {
        if (event.key === 'Enter') {
            let keyWord = event.target.value;
            console.log(keyWord);
            navigate(`/?q=${keyWord}`);
        }
    };

    // 사이드 메뉴의 링크 클릭 시 호출될 함수
    const handleSideMenuLinkClick = () => {
        closeSideMenu(); // 사이드 메뉴를 닫음
    };

    return (
        <div>
            <div className="top-area">
                <div className="mob-menu-list">
                    <div className="side-menu-toggle" onClick={toggleSideMenu}>
                        <FontAwesomeIcon icon={isSideMenuOpen ? faTimes : faBars} />
                    </div>
                    <div className={`side-menu-area ${isSideMenuOpen ? 'active' : ''}`}>
                        <div className="side-menu-header">
                            <FontAwesomeIcon icon={faTimes} onClick={closeSideMenu} className="close-button" />
                        </div>
                        <ul className="side-menu-list">
                            {menuList.map((menu, index) => (
                                <li key={index}>
                                    <Link
                                        to={`/?category=${menu}`}
                                        className={currentCategory === menu ? 'on' : ''}
                                        onClick={handleSideMenuLinkClick}
                                    >
                                        {menu}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="search-part">
                    <FontAwesomeIcon icon={faSearch} />
                    <input type="text" placeholder="search..." onKeyDown={(event) => search(event)} />
                </div>
                <div className="login-button" onClick={goToLogin}>
                    <FontAwesomeIcon icon={faUser} />
                    <div>{authenticate ? '로그아웃' : '로그인'}</div>
                </div>
            </div>
            <div className="logo-area">
                <Link to="/">제이 앤 제이</Link>
            </div>
            <div className="menu-area">
                <ul className="menu-list">
                    {menuList.map((menu, index) => (
                        <li key={index}>
                            <Link to={`/?category=${menu}`} className={currentCategory === menu ? 'on' : ''}>
                                {menu}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default HeaderBar;
