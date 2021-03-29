import React from 'react';
import { useHistory } from 'react-router-dom';

function GoToPage({ className = 'btn-green', text = 'На главную', path = '/' }) {
  let history = useHistory();
  return (
    <button onClick={() => history.pushState(path)} className={`btn ${className}`}>
      {text}
    </button>
  );
}

export default GoToPage;
