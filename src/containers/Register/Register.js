import React from 'react';
import {useInput} from "../../validationInput";

const Register = () => {
  const name = useInput('', {isEmpty: true, minLength: 4,validName:true});
  const email = useInput('', {isEmpty: true, isEmail: true, minLength: 5, maxLength: 15});
  const phone = useInput('', {isEmpty: true, isPhone: true, minLength: 11, maxLength: 16});
  const language = useInput('',{isEmpty: true});
  const agreement = useInput(false,{isEmpty: true,isChecked: true});
  return (
      <div className="register">
        <div className="container">
          <div className="register__wrapper-title">
            <h1 className="register__title">
                Регистрация
            </h1>
            <span className="register__sub-title">
                Уже есть аккаунт?
                <a className="register__sub-link" href="#">
                    Войти
                </a>
            </span>
          </div>

              <form onSubmit={(e)=>{e.preventDefault()}}>
                <div className="register__form">
                <label className="register__label" htmlFor="name">Имя</label>
                <input
                    placeholder="Введите Ваше имя"
                    className="register__input register__input-name"
                    id="name"
                    type="text"
                    name="name"
                    value={name.value}
                    onChange={name.onChange}
                    onBlur={name.onBlur}
                />
                  {(name.isDirty && name.isEmpty)&& <div className="register__error">Не может быть пустым</div> }
                  {(name.isDirty && name.minLengthError)&& <div className="register__error">Имя не может быть менее 4 символов</div> }
                  {(name.isDirty && name.validName)&& <div className="register__error">Введено не корректное значение!</div> }
                <label className="register__label" htmlFor="email">Email</label>
                <input
                    placeholder="Введите ваш email"
                    className="register__input"
                    id="email"
                    type="email"
                    name="email"
                    value={email.value}
                    onChange={email.onChange}
                    onBlur={email.onBlur}
                />
                  {(email.isDirty && email.isEmail)&& <div className="register__error" >Введено не корректное значение!</div> }
                  {(email.isDirty && email.isEmpty)&& <div className="register__error" > Поле не может быть пустым</div> }
                  {(email.isDirty && email.minLengthError)&& <div className="register__error" >Емаил должен быть не менее 6 символов</div> }
                <label className="register__label" htmlFor="phone">Номер телефона</label>
                <input
                    placeholder="Введите номер телефона"
                    className="register__input"
                    id="phone"
                    type="text"
                    name="phone"
                    value={phone.value}
                    onChange={phone.onChange}
                    onBlur={phone.onBlur}
                />
                  {(phone.isDirty && phone.isPhone)&& <div className="register__error" >Введено не корректное значение</div> }
                  {(phone.isDirty && phone.isEmpty)&& <div className="register__error" > Поле не может быть пустым</div> }
                  {(phone.isDirty && phone.minLengthError)&& <div className="register__error" >Телефон должен быть не менее 11 символов</div> }
                  {(phone.isDirty && phone.maxLengthError)&& <div className="register__error" >Телефон должен быть не более 16 символов</div> }

                <label className="register__label" htmlFor="lang">Язык</label>

                <select
                    className="register__input register__select"
                    name="lang"
                    id="lang"
                    defaultValue={language.value}
                    onChange={language.onChange}
                    onFocus={language.onBlur}
                >
                  <option  hidden className="register__option" value={language.value}>язык</option>
                  <option className="register__option" value="русский">Русский</option>
                  <option className="register__option" value="английский">Английский</option>
                  <option className="register__option" value="китайский">Китайский</option>
                  <option className="register__option" value="испанский">Испанский</option>

                </select>
                  {(language.isDirty && language.isEmpty)&& <div className="register__error" > Поле не может быть пустым</div> }
            <div className="register__checkbox-wrapper">
                <input
                    className="register__checkbox"
                    type="checkbox"
                    id="agreement"
                    name="agreement"
                    checked={agreement.value}
                    onChange={agreement.onChange}
                />
                  <label className="register__checkbox-label"   htmlFor="agreement">Принимаю <a className="register__checkbox-link" href="#">условия</a> использования</label>
            </div>

                <button
                    type="submit"
                    className={`register__btn ${(!email.validForm || !phone.validForm || !name.validForm || !language.validForm || !agreement.validForm) ? 'register__disabled' : ''}`}
                    disabled={!email.validForm || !phone.validForm || !name.validForm || !language.validForm || !agreement.validForm}
                >
                  Зарегистрироваться
                </button>
                </div>
              </form>
        </div>

      </div>
  );
};

export default Register;