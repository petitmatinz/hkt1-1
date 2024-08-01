import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#">서비스 전체보기</a>
      </div>
      <hr className="footer-separator" />
      <div className="footer-container">
        <div className="footer-column">
          <h3>고객 문의</h3>
          <p className="footer-contact"><strong>010-111-222</strong></p>
          <p>연중무휴</p>
          <p>myname@example.com</p>
        </div>
        <div className="footer-column">
          <h3>사업 소개</h3>
          <p>JOLLY JOURNEY</p>
        </div>
        <div className="footer-column">
          <h3>기타 문의</h3>
          <p>콘텐츠 제안하기</p>
          <p>고객센터</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>이용약관 | 개인정보 처리방침 | 청소년보호정책</p>
        <p>© 2024 PACE JOLLY JOURNEY</p>
        <p>
          (주) PACE | 멋쟁이사자처럼 | PM: 황보수연 | BE: 윤가영 이해원 | FE: 김진현 정수안
        </p>
      </div>
    </footer>
  );
};

export default Footer;
