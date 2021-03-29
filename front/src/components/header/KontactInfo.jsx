import React from 'react';
import {Envelope, Phone, GeoAlt} from 'react-bootstrap-icons'


function KontactInfo() {
  return (
    <>
      <a href="/" className="navbar-toppanel__info-item toppanel-info">
        <Phone />
        <span>7-000-000-000 </span>
      </a>
      <a href="mailto:domomail@mail.ru" className="navbar-toppanel__info-item toppanel-info">
        <Envelope />
        <span>domomail@mail.ru </span>
      </a>
      <a href="/" className="navbar-toppanel__info-item toppanel-info">
        <GeoAlt />
        <span>795 Folsom Ave, Suite 600 San Francisco, CA 94107</span>
      </a>
    </>
  );
}

export default KontactInfo;
