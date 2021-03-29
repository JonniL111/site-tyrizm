import React from 'react';
import {GeoAlt, CameraFill, FileCheck, Award} from 'react-bootstrap-icons';

function Advantages() {
  return (
    <div className="section-wrapper">
      <h2 className="section-title line">Преимущества</h2>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="advantage">
            <div className="advantage__img-wrapper">
              <GeoAlt />
            </div>
            <h4 className="advantage__title">Удобное расположение</h4>
            <p className="advantage__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis et perferendis
              iusto eos in quasi explicabo animi esse obcaecati unde error itaque necessitatibus
              sequi quis architecto, enim nulla minus! Labore!
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="advantage">
            <div className="advantage__img-wrapper">
              <CameraFill/>
            </div>
            <h4 className="advantage__title">Расположение</h4>
            <p className="advantage__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis et perferendis
              iusto eos in quasi explicabo animi esse obcaecati unde error itaque necessitatibus
              sequi quis architecto, enim nulla minus! Labore!
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="advantage">
            <div className="advantage__img-wrapper">
              <FileCheck />
            </div>
            <h4 className="advantage__title">Расположение</h4>
            <p className="advantage__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis et perferendis
              iusto eos in quasi explicabo animi esse obcaecati unde error itaque necessitatibus
              sequi quis architecto, enim nulla minus! Labore!
            </p>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="advantage">
            <div className="advantage__img-wrapper">
              <Award />
            </div>
            <h4 className="advantage__title">Расположение</h4>
            <p className="advantage__text">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis et perferendis
              iusto eos in quasi explicabo animi esse obcaecati unde error itaque necessitatibus
              sequi quis architecto, enim nulla minus! Labore!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantages;
