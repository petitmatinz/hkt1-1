import React from 'react';
import './SignIn.css';
import Header from '../components/Header';

const SignIn = () => {
  return (
    <>
      <Header />
      <div className="signin-container">
        <h2 className="welcome-message">Jolly Journey 에 오신 걸 환영해요!</h2>
        <form className="signin-form">
          <div className="input-group">
            <label htmlFor="email">이메일</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="input-group">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit" className="signin-button">로그인</button>
        </form>
        <div className="signup-link">
          <span>계정이 없으신가요? </span>
          <button className="signup-button">회원가입</button>
        </div>
        <div className="divider">OR</div>
        <div className="kakao-login">
          <button className="kakao-button">카카오 계정으로 3초만에 시작하기</button>
        </div>
      </div>
    </>
  );
};

export default SignIn;
