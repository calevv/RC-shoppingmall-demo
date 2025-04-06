import React from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuthenticate }) => {
    const navigate = useNavigate();
    const loginUser = (e) => {
        e.preventDefault();
        console.log('login');
        setAuthenticate(true);
        navigate('/');
    };
    return (
        <div className="loginContainer">
            <h1>로그인</h1>
            <form className="loginForm" onSubmit={(e) => loginUser(e)}>
                <div className="inputGroup">
                    <label htmlFor="username">아이디</label>
                    <input type="text" id="username" name="username" placeholder="아이디를 입력하세요" />
                </div>
                <div className="inputGroup">
                    <label htmlFor="password">비밀번호</label>
                    <input type="password" id="password" name="password" placeholder="비밀번호를 입력하세요" />
                </div>
                <button type="submit" className="loginButton">
                    로그인
                </button>
                {/* <div className="linkContainer">
                    <a href="/register">회원가입</a>
                    <span>|</span>
                    <a href="/forgot-password">비밀번호 찾기</a>
                </div> */}
            </form>
        </div>
    );
};

export default Login;
