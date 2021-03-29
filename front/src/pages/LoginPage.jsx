import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Field } from 'react-final-form';
import firebase from 'firebase';
import { Redirect } from 'react-router-dom';

import { loginUser } from '../redux/action/user';

function LoginPage({history}) {
  const dispatch = useDispatch();

  /*  useEffect(() => {
    firebase.auth().
  }, [input]) */

  const onSubmit = (values, form) => {
    const { email, password } = values;
    /* firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((error) => console.log(error));
    setTimeout(() => {
      form.reset();
    }, 300); */
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(({ user }) => dispatch(loginUser({ email: user.email })))
      .then(() => history.push('/'))
      .catch((error) => console.log(`Ошибка - ${error}`));
    setTimeout(() => {
      form.reset();
    }, 300);
  };

  return (
    <section className="short-data">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 offset-md-3">
            <div className="filter">
              <div className="filter-wrapper">
                <h3 className="section-title">Войти</h3>
                <Form
                  onSubmit={onSubmit}
                  render={({ handleSubmit, form, submitting, pristine, values }) => (
                    <form className="filter-form form flex-column" onSubmit={handleSubmit}>
                      <div className="form-group width-3">
                        <label className="form-group__label">
                          Логин
                          <Field
                            className="form-group__input"
                            name="email"
                            component="input"
                            type="email"
                            placeholder="Логин"
                          />
                        </label>
                      </div>
                      <div className="form-group width-3">
                        <label className="form-group__label">
                          Пароль
                          <Field
                            className="form-group__input"
                            name="password"
                            component="input"
                            type="password"
                            placeholder="Пароль"
                          />
                        </label>
                      </div>
                      <div className="form-group width-3 flex">
                        <button
                          className="btn btn-green"
                          type="submit"
                          onSubmit={form.reset}
                          disabled={submitting || pristine}>
                          Создать аккаунт
                        </button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoginPage;
