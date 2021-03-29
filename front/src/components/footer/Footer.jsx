import React from 'react';
import { SocialBtn } from '../header';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-wrapper">
          <div className="footer__copyright">
            © 2021 All Rights Reserved
            <a href="/">Terms of Use and Privacy Policy</a>
          </div>
          <div className="footer__social">
            <SocialBtn />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
