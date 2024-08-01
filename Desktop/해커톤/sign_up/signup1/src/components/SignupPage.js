import React from 'react';
import Header from './Header';
import '../styles/SignupPage.css';

const SignupPage = () => {
  return (
    <div>
      <Header />
      <div className="signup-container">
        <form className="signup-form">
          <label htmlFor="username">아이디*</label>
          <div className="email-group">
            <input type="text" id="username" name="username" placeholder="아이디" />
            <span>@</span>
            <input type="text" id="domain" name="domain" placeholder="example.com" />
            <select name="domain-select">
              <option value="">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
          <label htmlFor="password">비밀번호*</label>
          <input type="password" id="password" name="password" placeholder="6~16자의 비밀번호, 문자와 숫자 포함" />
          <label htmlFor="confirm-password">비밀번호 확인*</label>
          <input type="password" id="confirm-password" name="confirm-password" />
          <label htmlFor="name">이름*</label>
          <input type="text" id="name" name="name" />
          <label htmlFor="phone">전화번호*</label>
          <input type="text" id="phone" name="phone" />
          <label htmlFor="birthdate">생년월일*</label>
          <input type="text" id="birthdate" name="birthdate" placeholder="예: 20010101" />
          <label>성별*</label>
          <div className="gender-group">
            <input type="radio" id="male" name="gender" value="male" />
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" value="female" />
            <label htmlFor="female">여</label>
          </div>
          <div className="checkbox-group">
            <input type="checkbox" id="terms" name="terms" />
            <label htmlFor="terms">Jolly Journey 이용 약관 동의 (필수)</label>
            <input type="checkbox" id="privacy" name="privacy" />
            <label htmlFor="privacy">개인정보 수집 및 이용 동의 (필수)</label>
          </div>
          <button type="submit" className="signup-button">회원가입</button>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
