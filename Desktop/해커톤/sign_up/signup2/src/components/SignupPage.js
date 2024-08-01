import React, { useState } from 'react';
import Header from './Header';
import '../styles/SignupPage.css';

const SignupPage = () => {
  const [errors, setErrors] = useState({
    email: "이미 사용중인 이메일 입니다.",
    password: "8~16 자리 이내, 영문 대소문자 및 숫자를 포함하고 있어야 합니다.",
    confirmPassword: "비밀번호가 일치하지 않습니다.",
    name: "",
    username: "이미 사용중인 별명입니다.",
    phone: "올바르지 않은 양식입니다.",
    birthdate: "올바르지 않은 양식입니다.",
    terms: "약관 동의는 필수입니다.",
  });

  return (
    <div>
      <Header />
      <div className="signup-container">
        <form className="signup-form">
          <h2>회원가입</h2>
          <label htmlFor="email">이메일*</label>
          <div className="email-group">
            <input type="text" id="email" name="email" placeholder="ex) myname" />
            <span>@</span>
            <input type="text" id="domain" name="domain" placeholder="ex) example.com" />
            <select name="domain-select">
              <option value="">선택</option>
              <option value="naver.com">naver.com</option>
              <option value="gmail.com">gmail.com</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
          {errors.email && <p className="error">{errors.email}</p>}
          <label htmlFor="password">비밀번호*</label>
          <input type="password" id="password" name="password" placeholder="8~16 자리 이내, 영문 대소문자 및 숫자 포함" />
          {errors.password && <p className="error">{errors.password}</p>}
          <label htmlFor="confirm-password">비밀번호 확인*</label>
          <input type="password" id="confirm-password" name="confirm-password" />
          {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
          <label htmlFor="name">이름*</label>
          <input type="text" id="name" name="name" />
          {errors.name && <p className="error">{errors.name}</p>}
          <label htmlFor="username">별명*</label>
          <input type="text" id="username" name="username" />
          {errors.username && <p className="error">{errors.username}</p>}
          <label htmlFor="phone">전화번호*</label>
          <input type="text" id="phone" name="phone" placeholder="ex) 01012345678" />
          {errors.phone && <p className="error">{errors.phone}</p>}
          <label htmlFor="birthdate">생년월일*</label>
          <input type="text" id="birthdate" name="birthdate" placeholder="예: 20010101" />
          {errors.birthdate && <p className="error">{errors.birthdate}</p>}
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
            {errors.terms && <p className="error">{errors.terms}</p>}
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
