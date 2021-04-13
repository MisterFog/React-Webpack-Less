import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { useTranslation } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FacebookAuth } from '../_helper/FacebookAuth';
import { GoogleAuth } from '../_helper/GoogleAuth';
import googleIcon from '../_styles/ico/google.svg';
import facebookIcon from '../_styles/ico/fb.svg';
import '../_styles/login.less';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

/** */
interface LoginData {
  phone: string;
  password: string;
  repeatPassword: string;
  pincod: string;
}

const Login = () => {
  //
  const { t } = useTranslation('common');
  //
  const dispatch = useDispatch();
  //
  const history = useHistory();

  //
  const user = {
    phone: '+111(11)111-11-11',
    password: 'demodemo',
  }

  //
  const [userData, setData] = useState<LoginData>({
    phone: user.phone ? user.phone : '',
    password: user.password ? user.password : '',
    repeatPassword: '',
    pincod: '',
  });

  return(
    <div className="ibb-login ibb-page__wrap">
      <h1>{t('Entry')}</h1>
      <div className="ibb-login__form">
        <Formik
          initialValues={userData}
          //
          onSubmit={(values: LoginData, { setSubmitting }: FormikHelpers<LoginData>) => {
            setTimeout(async () => {
              setData(values);
              // await loginUser(values);
              setSubmitting(false);
            }, 400);
          }}
          //
          validate={values => {
            const errors = { phone: '', password: '' };
            //
            if (!values.phone) {
              errors.phone = t('Enter your phone number').toLowerCase();
            } else if (
              // eslint-disable-next-line
              !/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(values.phone)){
                errors.phone = t('invalid phone number');
              }

            if (!values.password) {
              errors.password = t('enter password');
            } else if (values.password.split('').length < 6) {
              errors.password = t('password must be at least 6 characters');
            }

            if (errors.phone || errors.password) return errors;
            else return {};
          }}
        >
          {({ isSubmitting, resetForm }) => (
            <Form className="ibb-formik">
              <div className="ibb-formik__form">
                <Field
                    type="tel"
                    name="phone"
                    className="ibb-formik__field"
                    placeholder={t('phone')}
                />
                <ErrorMessage name="phone" component="div" className="ibb-formik__error" />
              </div>

              <div className="ibb-formik__form">
                <Field
                  type="password"
                  name="password"
                  className="ibb-formik__field"
                  placeholder={t('Password')}
                />
                <ErrorMessage name="password" component="div" className="ibb-formik__error" />
              </div>

              <label>
                {t(`Forgot your password?`)} 
                <button type="reset" onClick={() => {resetForm;}}>
                    {t('Restore password')}
                </button>
              </label>

              <button type="submit" disabled={isSubmitting} className="ibb-formik__btn">
                {t('Login')}
              </button>
              
            </Form>
          )}
        </Formik>

        <p>{t('or log in with')}</p>

          <div className="ibb-singnup__sosials">
            <div>
              <GoogleLogin
                clientId="232673908874-7rsv0kljgbr6ioblaslpjsfgaj8bl0qp.apps.googleusercontent.com"
                onSuccess={(googleData: any) => GoogleAuth(googleData, dispatch, history)}
                onFailure={(error: any) => {
                  // console.log('Google on failure: ', error);
                  // history.push('/register');
                }}
                isSignedIn={false}
                render={(renderProps: any) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="ibb-singnup__sosial-btn"
                  >
                    <span>{'google'.toUpperCase()}</span>
                    <img src={googleIcon} alt="Goole register" />
                  </button>
                )}
              />
            </div>
            <div>
              <FacebookLogin
                appId="1049380911807889"
                autoLoad={false}
                fields="name,email,picture"
                callback={(facebookData: any) => FacebookAuth(facebookData, dispatch, history)}
                onFailure={() => {
                  history.push('/register');
                }}
                render={(renderProps: any) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                    className="ibb-singnup__sosial-btn"
                  >
                    <span>{'facebook'.toUpperCase()}</span>
                    <img src={facebookIcon} alt="Facebook register" />
                  </button>
                )}
              />
            </div>
          </div>
      </div>
    </div>
  )
}

export default Login; 
