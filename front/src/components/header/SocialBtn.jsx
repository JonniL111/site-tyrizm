import React from 'react';
import { Facebook, Youtube, Twitter } from 'react-bootstrap-icons';

function SocialBtn() {
  return (
    <>
      <a href="/" className="socialbtn__link">
        <Facebook />
      </a>
      <a href="/" className="socialbtn__link">
        <Youtube />
      </a>
      <a href="/" className="socialbtn__link">
        <Twitter />
      </a>
    </>
  );
}

export default SocialBtn;
