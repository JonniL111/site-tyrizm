import React from 'react';
import { Form, Field } from 'react-final-form';

function FinalForm() {
  const handlerSubmit = (e, val) => {
    e.preventDefault();
    console.log(val);
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
                  <div className="form-group__inner">
                    <i className="bi bi-chevron-down"></i>
                    <Field className="form-group__search" name="location" component="select" defaultValue={"Any"}>
                      <option value="Any" >
                        Любое
                      </option>
                      <option value="Moskow">Moskow</option>
                      <option value="Tver">Tver</option>
                    </Field>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label className="form-group__label">
                  Статус собственности
                  <div className="form-group__inner">
                    <i className="bi bi-chevron-down"></i>
                    <Field className="form-group__search" name="propertyStatus" component="select"  defaultValue={"Any"}>
                      <option value="Any">
                        Любое
                      </option>
                      <option value="home">Дом</option>
                      <option value="residenc">Резиденция</option>
                    </Field>
                  </div>
                </label>
              </div>

              <div className="form-group">
                <label className="form-group__label">
                  Тип недвижимости
                  <div className="form-group__inner">
                    <i className="bi bi-chevron-down"></i>
                    <Field className="form-group__search" name="propertyType" component="select"  defaultValue={"Any"}>
                      <option value="Any">
                        Любое
                      </option>
                      <option value="home">Дом</option>
                      <option value="residenc">Резиденция</option>
                    </Field>
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
                <span className="form-group__label">Мин. кроватей</span>
                <div className="form-group__inner">
                  <i className="bi bi-chevron-down"></i>
                  <Field className="form-group__search" name="minBeds" component="select"  defaultValue={"Any"}>
                    <option value="Any">
                      Любое
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Field>
                </div>
              </div>

              <div className="form-group width-2">
                <span className="form-group__label">Мин. комнат</span>
                <div className="form-group__inner">
                  <i className="bi bi-chevron-down"></i>
                  <Field className="form-group__search" name="minRooms" component="select"  defaultValue={"Any"}>
                    <option value="Any">
                      Любое
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                  </Field>
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
