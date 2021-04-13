import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { FacebookAuth } from '../_helper/FacebookAuth';
import { GoogleAuth } from '../_helper/GoogleAuth';
import googleIcon from '../_styles/ico/google.svg';
import facebookIcon from '../_styles/ico/fb.svg';
import '../_styles/singnup.less'
import { useDispatch } from 'react-redux';

const Signup = () => {
  //
  const { t } = useTranslation('common');

  //
  const [trial, setTrial] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  //
  const dispatch = useDispatch();

  //
  const history = useHistory();
  

  useEffect(() => {
    console.log('useEffect trial: ',trial);
    console.log('useEffect phone: ',phone);
    console.log('useEffect code: ',code);
  },[phone, trial, code]);

  //
  return(
    <div className="ibb-singnup ibb-page__wrap">
      <h1>{t('Registration')}</h1>
      <h4>{t('I already have an account')} &mdash; <Link to="/login">{t('Login')}</Link></h4>

      <div className="ibb-singnup__content">
        <div className="ibb-singnup__form">
          {phone.length < 1  ? 
          <Formik
            key={1}
            initialValues={{ phone: '', trial: false, }}
            //
            onSubmit={(values: { phone: '', trial: false }, { setSubmitting }: FormikHelpers<{ phone: '', trial: false }>) => {
              setTimeout(() => {
                setPhone(values.phone);
                setTrial(values.trial);
                setSubmitting(false);
              }, 400);
            }}
            //
            validate={values => {
              const errors = { phone: '' };

              if (!values.phone) {
                errors.phone = t('Enter your phone number').toLowerCase();
              } else if (
                // eslint-disable-next-line
                !/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(values.phone)){
                  errors.phone = t('invalid phone number');
                }

              if (errors.phone) return errors;
              else return {};
            }}
          >
            {({ isSubmitting }) => (
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

                <label>
                  <Field
                    type="checkbox"
                    name="trial"
                    className="ibb-formik__checkbox"
                  />
                  {t('I want to use the system for free for 30 days')}
                </label>

                <button type="submit" disabled={isSubmitting} className="ibb-formik__btn">
                  {t('Get SMS code')}
                </button>
              </Form>
            )}
          </Formik>
          : <Formik
              key={2}
              initialValues={{ code: '' }}
              //
              onSubmit={(values: { code: ''}, { setSubmitting }: FormikHelpers<{ code: '' }>) => {
                setTimeout(() => {
                  console.log('values.code: ',values.code);
                  setCode(values.code);
                  setSubmitting(false);
                }, 400);
              }}
              //
              validate={values => {
                const errors = { code: '' };

                if (!values.code) {
                  errors.code = t('Enter your SMS code').toLowerCase();
                } else if (
                  // eslint-disable-next-line
                  !/^[\d\- ]{4,6}$/i.test(values.code)){
                    errors.code = t('invalid SMS code');
                  }

                if (errors.code) return errors;
                else return {};
              }}
            >
              {({ isSubmitting, resetForm }) => (
                <Form className="ibb-formik">
                  <label className="ibb-singnup__edit">
                    {t('We have sent a code to enter the number')} {phone} <button type="reset" onClick={() => setPhone('')}>
                        {t('Edit')}
                    </button>                 
                  </label>

                  <div className="ibb-formik__form">
                    <Field
                      type="text"
                      name="code"
                      className="ibb-formik__field"
                      placeholder={t('SMS code')}
                    />
                    <ErrorMessage name="code" component="div" className="ibb-formik__error" />
                  </div>

                  <label>
                    {t(`Didn't receive SMS?`)} 
                    <button type="reset" onClick={() => resetForm}>
                        {t('Send again')}
                    </button>
                  </label>

                  <button type="submit" disabled={isSubmitting} className="ibb-formik__btn">
                    {t('Login')}
                  </button>
                </Form>
              )}
            </Formik>
          }

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
          
          <div className="ibb-singnup__agreement">
            <p>{t('By registering, you agree to the terms')} <br/> <Link to="/">{t('user agreement')}</Link></p>
          </div>
        </div>

        <div className="ibb-singnup__advantages">
          <h2>{t('Benefits of registration')}</h2>
          <div className="ibb-singnup__advantag-element">
            <div className="ibb-singnup__advantag-content">
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="ibb-singnup__advantag-element">
            <div className="ibb-singnup__advantag-content">
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div className="ibb-singnup__advantag-element">
            <div className="ibb-singnup__advantag-content">
              <h3>Lorem ipsum dolor</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
        </div> 

      </div>      
    </div>
  )
};

/**
 *
 */
export default Signup; 
