//full width banner and breadcrumbs

import React from 'react';

function TopBanner({ children, title }) {
  return (
    <div className="section-wrapper">
      <h2 className="section-title title--white">{title}</h2>
      {children}
    </div>
  );
}

export default TopBanner;
