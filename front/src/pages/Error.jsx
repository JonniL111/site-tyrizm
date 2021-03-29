import React from 'react';

function Error(props) {
  return (
    <>
      <section className="catalog-section error-section">
        <div className="container">
          <div className="section-wrapper">
            <div className="row">
              <div className="col-12 d-flex flex-wrap justify-content-center">
                <div className="error-text">Что-то пошло не так!</div>
                <button onClick={() => props.history.push('/')} className="btn btn-green">На главную</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Error;
