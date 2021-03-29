import React from 'react';
import { Form, Field } from 'react-final-form';

function CallBack() {
  const handlerSubmit = (e, val) => {
    e.preventDefault();
    console.log(val);
  };
  return (
    <>
      <p className="dark-text mt-10">
        You can contact us any way that is convenient for you. We would be happy to answer your
        questions.
      </p>
      <Form
        onSubmit={handlerSubmit}
        render={({ handleSubmit, form, submitting, pristine, values }) => (
          <form className="callback" onSubmit={(e) => handlerSubmit(e, values)}>
            <label className="callback__label">
              Ваше имя
              <Field
                className="callback__input full-width"
                name="name"
                component="input"
                type="text"
                placeholder="Имя"
              />
            </label>
            <label className="callback__label">
              Номер телефона
              <Field
                className="callback__input full-width"
                name="lastname"
                component="input"
                type="text"
                placeholder="Фамилия"
              />
            </label>
            <label className="callback__label">
              Ваш e-mail
              <Field
                className="callback__input full-width"
                name="phone"
                component="input"
                type="text"
                placeholder="Телефон"
              />
            </label>
            <label className="callback__label">
              Сообщение
              <Field
                className="callback__textarea full-width"
                name="phone"
                component="textarea"
                type="text"
                placeholder="Сообщение"
              />
            </label>
            <button className="btn btn-orange">отправить</button>
          </form>
        )}
      />
    </>
  );
}

export default CallBack;
