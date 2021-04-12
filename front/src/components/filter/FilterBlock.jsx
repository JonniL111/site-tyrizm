import React, { useContext, useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import { setCurentFilter } from '../../redux/action/filters';
import { GlobalData } from '../hoc/withGlobal';
import FieldSelect from './components/FieldSelect';

function FinalForm() {
  const { dispatch, filters } = useContext(GlobalData);
  const handlerSubmit = (e, val) => {
    console.log(val);
    e.preventDefault();
    dispatch(setCurentFilter(val));
  };

  return (
    <div className="filter">
      <div className="filter-wrapper">
        <h3 className="section-title">Найдите свой дом</h3>
        <Form
          onSubmit={handlerSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form className="filter-form form" onSubmit={(e) => handlerSubmit(e, values)}>
              <div className="form-group">
                <label className="form-group__label">
                  Ключевое слово
                  <Field
                    className="form-group__input"
                    name="formKeyword"
                    component="input"
                    type="text"
                    placeholder="Любое"
                  />
                </label>
              </div>

              <div className="form-group">
                <label className="form-group__label">
                  Место
                  <FieldSelect
                    className="form-group__search"
                    name="location"
                    component="select"
                    filters={filters}                    
                  />
                </label>
              </div>

              <div className="form-group">
                <label className="form-group__label">
                  Статус собственности
                  <div className="form-group__inner">
                    <i className="bi bi-chevron-down"></i>
                    <FieldSelect
                      className="form-group__search"
                      name="status"
                      component="select"
                      filters={filters}
                    />
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label className="form-group__label">
                  Тип недвижимости
                  <div className="form-group__inner">
                    <i className="bi bi-chevron-down"></i>
                    <FieldSelect
                      className="form-group__search"
                      name="propertyType"
                      component="select"
                      filters={filters}
                    />
                  </div>
                </label>
              </div>

              <div className="form-group width-1">
                <span className="form-group__label">Стоимость (USD)</span>
                <Field
                  className="form-group__input form-group__range"
                  name="priceMin"
                  component="input"
                  type="text"
                  placeholder=""
                />
                <span className="form-dash"></span>
                <Field
                  className="form-group__input form-group__range"
                  name="priceMax"
                  component="input"
                  type="text"
                  placeholder=""
                />
              </div>

              <div className="form-group width-1">
                <span className="form-group__label">Площадь (кв. м.)</span>
                <Field
                  className="form-group__input form-group__range"
                  name="areaMin"
                  component="input"
                  type="text"
                  placeholder=""
                />
                <span className="form-dash"></span>
                <Field
                  className="form-group__input form-group__range"
                  name="areaMax"
                  component="input"
                  type="text"
                  placeholder=""
                />
              </div>

              <div className="form-group width-2">
                <span className="form-group__label">Мин. спален</span>
                <div className="form-group__inner">
                  <i className="bi bi-chevron-down"></i>
                  <FieldSelect
                    className="form-group__search"
                    name="bedrooms"
                    component="select"
                    filters={filters}
                  />
                </div>
              </div>

              <div className="form-group width-2">
                <span className="form-group__label">Мин. кроватей</span>
                <div className="form-group__inner">
                  <i className="bi bi-chevron-down"></i>                  
                  <FieldSelect
                    className="form-group__search"
                    name="beds"
                    component="select"
                    filters={filters}
                  />
                </div>
              </div>

              <div className="form-group width-2 flex">
                <button className="btn btn-green" type="submit" disabled={submitting || pristine}>
                  Поиск
                </button>
              </div>
            </form>
          )}
        />
      </div>
    </div>
  );
}

export default FinalForm;
