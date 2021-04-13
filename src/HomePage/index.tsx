import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import YouTube, { Options } from 'react-youtube';
import SwiperIBB from '../Components/SwiperIBB';
import GoogleMapLocation from '../Components/GoogleMapLocation';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import img1 from '../_styles/img/comments/auth_slide1.svg';
import img2 from '../_styles/img/comments/auth_slide2.svg';
import img3 from '../_styles/img/comments/auth_slide3.svg';
import img4 from '../_styles/img/comments/auth_slide4.svg';
import img5 from '../_styles/img/comments/auth_slide5.svg';
import img6 from '../_styles/img/comments/auth_slide5.svg';
import img7 from '../_styles/img/comments/auth_slide5.svg';


/** */
interface UserData {
  email: string;
  name: string;
  phone?: string;
}

const HomePage = () => {
  //
  const { t } = useTranslation('common');

  const imgArray = [img1, img2, img3 ,img4, img5, img6, img7];

  const opts: Options = {
    height: '100%',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };

  //
  const arrayComment = () => {
    const prev = [];
    for (var i = 1; i < 7; i++) {
      prev[i] = (
        <div className="comments-swiper__item swiper-slide">
          <img
            className="comments-swiper__item-img"
            // src={'../_styles/img/comments/auth_slide' + i + '.svg'}
            src={imgArray[i]}
            alt="slider"
          />
          {/* <div className="comments-swiper__item-content">
            <p dangerouslySetInnerHTML={{ __html: t('comments.content' + i) }}></p>
          </div> */}
        </div>
      );
    }
    return prev;
  };

  //
  const arrayUser = () => {
    const prev = [];
    for (var i = 1; i < 7; i++) {
      prev[i] = (
        <div className="users-swiper__item swiper-slide">
          <img
            className="users-swiper__item-img"
            src={imgArray[i]}
            alt="slider"
          />
          <div className="users-swiper__item-content">
            <p dangerouslySetInnerHTML={{ __html: t('users.content' + i) }}></p>
            <button type="submit" className="ibb-home__btn">
            {t('to write a message')}
          </button>
          </div>
        </div>
      );
    }
    return prev;
  };

  //
  const [userData, setData] = useState<UserData>({
    name: '',
    email: '',
  });

  return (
    <div className="ibb-home">
      <section className="ibb-home__description">
        <div className="ibb-page__wrap">

          <h1>УТП InfoBBook</h1>

          <p> краткое описание компании \ вступительный текст.</p>

          <button type="submit" className="ibb-home__btn">
            {t('Sign up')}
          </button>
        
        </div>
      </section>

      <section className="ibb-home__activities">
        <div className="ibb-page__wrap">
          <h2>Краткое описание деятельности портала </h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti non velit sed sagittis, tincidunt. Quisque semper porttitor elit duis. Aenean bibendum imperdiet consectetur nulla aliquam odio vitae. Velit, a, elementum pharetra adipiscing turpis in.</p>

          <div className="ibb-home__activities-block">
          {[0, 1, 2 ].map((element: number, index: number) => (
            <div key="index" className="ibb-home__activities-content">
              <div className="ibb-home__activities-element">
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>))}
          </div>

          <button type="submit" className="ibb-home__btn">
            {t('Sign up')}
          </button>
        
        </div>
      </section>

      <section className="ibb-home__action ibb-page__wrap">
        <h2>Призыв к действию</h2>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti non velit sed sagittis, tincidunt. Quisque semper porttitor elit duis.</p>

        <button type="submit" className="ibb-home__btn">
          {t('Sign up')}
        </button>
      </section>

      <section className="ibb-home__video ibb-page__wrap">
        <div className="ibb-home__video-youtube">
          <YouTube videoId="6bpZMO57ykc" opts={opts} />
        </div>
        <div className="ibb-home__video-content">
          <h2>Призыв к действию</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti non velit sed sagittis, tincidunt. Quisque semper porttitor elit duis.</p>

          <button type="submit" className="ibb-home__btn">
            {t('Sign up')}
          </button>
        </div>
      </section>
      
      <section className="ibb-home__advantages">
        <div className="ibb-page__wrap">
          <h2>Наши преимущества</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti non velit sed sagittis, tincidunt. Quisque semper porttitor elit duis. Aenean bibendum imperdiet consectetur nulla aliquam odio vitae. Velit, a, elementum pharetra adipiscing turpis in.</p>

          <div className="ibb-home__advantages-block">
            {[0, 1, 2, 3, 4, 5].map((element: number, index: number) => (
            <div key="index" className="ibb-home__advantages-content">
              <div className="ibb-home__advantages-element">
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>))}
          </div>

          <button type="submit" className="ibb-home__btn">
            {t('Sign up')}
          </button>        
        </div>
      </section>


      <section className="ibb-home__get">
        <div className="ibb-page__wrap">
          <h2>Что вы получаете</h2>

          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Potenti non velit sed sagittis, tincidunt. Quisque semper porttitor elit duis.</p>

          <div className="ibb-home__get-block">
          {[0, 1, 2 ].map((element: number, index: number) => (
            <div key="index" className="ibb-home__get-content">
              <div className="ibb-home__get-element">
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>))}
          </div>  
          <button type="submit" className="ibb-home__btn">
            {t('Sign up')}
          </button>       
        </div>
      </section>


      <section className="ibb-home__comments">
        <div className="ibb-page__wrap">
          <h2>Отзывы</h2>

          <SwiperIBB slides={arrayComment()} perview={3} spaceBetween={20} />
        </div>
      </section>


      <section className="ibb-home__users">
        <div className="ibb-page__wrap">
          <h2>Пользователи</h2>

          <SwiperIBB slides={arrayUser()} perview={3} spaceBetween={20} />

          <button type="submit" className="ibb-home__btn">
            {t('All users')}
          </button>
        </div>
      </section>

      <section className="ibb-home__tarifs">
        <div className="ibb-page__wrap">
          <h2>Тарифы</h2>

          <div className="ibb-home__tarifs-block">
          {[0, 1, 2 ].map((element: number, index: number) => (
            <div key="index" className="ibb-home__tarifs-content">
              <div className="ibb-home__tarifs-element">
              <button type="submit" className="ibb-home__btn">
                {t('Choose')}
              </button>
              </div>
            </div>))}
          </div> 
        </div>
      </section>

      <section className="ibb-home__newsletter">
        <div className="ibb-page__wrap">
          <h2>Подписать на рассылку</h2>

          <Formik
            initialValues={userData}
            //
            onSubmit={(values: UserData, { setSubmitting }: FormikHelpers<UserData>) => {
              setTimeout(async () => {
                setData(values);
                // sentEmail(values);
                setSubmitting(false);
              }, 400);
            }}
            //
            validate={values => {
              const errors = { name: '', email: '' };
              //
              if (!values.email) {
                errors.email = t('enter mail');
              } else if (
                // eslint-disable-next-line
                  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                  values.email
                )
              ) {
                errors.email = t('invalid email address');
              }

              if (!values.name) {
                errors.name = t('enter yoyr name');
              } 

              if (errors.email || errors.name) return errors;
              else return {};
            }}
          >
            {({ isSubmitting }) => (
              <Form className="ibb-home__newsletter-form">
                <div className="fild_form">
                  <Field
                    type="string"
                    name="name"
                    className="ibb-home__newsletter-mane"
                    placeholder={t('your name')}
                  />
                  <ErrorMessage name="name" component="div" className="ibb-formik__error" />
                </div>

                <div className="fild_form">
                  <Field
                    type="email"
                    name="email"
                    className="ibb-home__newsletter-email"
                    placeholder={t('Mail')}
                  />
                  <ErrorMessage name="email" component="div" className="ibb-formik__error" />
                </div>

                <button type="submit" disabled={isSubmitting} className="ibb-home__btn">
                  {t('Sent email')}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </section>


      <section className="ibb-home__contacts">
        <div className="ibb-page__wrap">
          <h2>Контакты</h2>

          <div className="ibb-page__contacts-block">
            <div className="ibb-page__contacts-left">
              <p>Телефон:<br/> +9 87 654 32 10 </p>
              <p>Почта:<br/> hello@infobbook.com</p>
              <p>Адрес:<br/> ул. Константинопольская, д1</p>

              <GoogleMapLocation />
            </div>
            <div className="ibb-page__contacts-right">
              <h3>Остались вопросы?</h3>

              <Formik
                initialValues={userData}
                //
                onSubmit={(values: UserData, { setSubmitting }: FormikHelpers<UserData>) => {
                  setTimeout(async () => {
                    setData(values);
                    // sentEmail(values);
                    setSubmitting(false);
                  }, 400);
                }}
                //
                validate={values => {
                  const errors = { phone: '', name: '', email: '' };
                  //
                  if (!values.email) {
                    errors.email = t('enter mail');
                  } else if (
                    // eslint-disable-next-line
                      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = t('invalid email address');
                  }

                  if (!values.name) {
                    errors.name = t('enter yoyr name');
                  } 

                  if (!values.phone) {
                    errors.phone = t('Enter your phone number').toLowerCase();
                  } else if (
                    // eslint-disable-next-line
                    !/^(?:(?:\(?(?:00|\+)([1-4]\d\d|[1-9]\d?)\)?)?[\-\.\ \\\/]?)?((?:\(?\d{1,}\)?[\-\.\ \\\/]?){0,})(?:[\-\.\ \\\/]?(?:#|ext\.?|extension|x)[\-\.\ \\\/]?(\d+))?$/i.test(values.phone)){
                      errors.phone = t('invalid phone number');
                    }

                  if (errors.email || errors.name || errors.phone) return errors;
                  else return {};
                }}
              >
                {({ isSubmitting }) => (
                  <Form className="ibb-home__contacts-form">
                    <div className="ibb-home__contacts-fild">
                      <Field
                        type="string"
                        name="name"
                        className="ibb-home__contacts-mane"
                        placeholder={t('your name')}
                      />
                      <ErrorMessage name="name" component="div" className="ibb-formik__error" />
                    </div>

                    <div className="ibb-home__contacts-fild">
                      <Field
                          type="tel"
                          name="phone"
                          className="ibb-home__contacts-phone"
                          placeholder={t('phone')}
                      />
                      <ErrorMessage name="phone" component="div" className="ibb-formik__error" />
                    </div>

                    <div className="ibb-home__contacts-fild">
                      <Field
                        type="email"
                        name="email"
                        className="ibb-home__contacts-email"
                        placeholder={t('Mail')}
                      />
                      <ErrorMessage name="email" component="div" className="ibb-formik__error" />
                    </div>

                    <button type="submit" disabled={isSubmitting} className="ibb-home__btn">
                      {t('Sent email')}
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default HomePage;
