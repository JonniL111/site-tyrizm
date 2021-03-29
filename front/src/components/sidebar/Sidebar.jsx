//left - 1, right - 3

import React from 'react';

function Sidebar({ order, children }) {
  const _widgetList = (children) => {
    const result = children.map((item, idx) => (
      <div className="widget-box" key={idx}>
        <h4 className="widget-box__title">{item.props.title}</h4>
        <div className="widget-box__item">{item}</div>
      </div>
    ));
    return result;
  };

  const _widgetSingle = (children) => (
    <div className="widget-box">
      <h4 className="widget-box__title">{children.props.title}</h4>
      <div className="widget-box__item">{children}</div>
    </div>
  );

  return (
    <div className={`col-sm-12 col-md-3 ${order}`}>
      <aside className="sidebar-wrapper">
        {Array.isArray(children) ? _widgetList(children) : _widgetSingle(children)}
      </aside>
    </div>
  );
}

export default Sidebar;
