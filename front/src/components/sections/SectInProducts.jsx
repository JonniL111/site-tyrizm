import React from 'react';

function SectInProducts({title, children }) {
  return (
    <div className="product__info-box">
      <div className="block-title line-full-width">{title}</div>
      {children}
    </div>
  );
}

export default SectInProducts;
