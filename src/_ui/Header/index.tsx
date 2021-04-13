import { Link, useHistory } from 'react-router-dom';

import '../../_styles/header.less';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import logo from '../../_styles/img/logo.svg';
import { useState } from 'react';

const Header = () => {
  //
  const { t, i18n } = useTranslation('common');

  const [large, setLarge] = useState(i18n.language === 'ru' ? 'Ru' : 'En');
  const [open, setOpen] = useState(false);

  // переключатель меню
  const toggle = () => {
    //
    setOpen(!open);
  };

  //
  const history = useHistory();

  /**
   *
   */
  return (
    <div id="header" className="ibb-header">
      <div id="header" className="ibb-header__wrap">
        <div className="ibb-header__logo">
          <Link to="/">
            <img src={logo} alt="Homepage" />
          </Link>
        </div>

        <nav className="ibb-header__menu">
          <button className="ibb-header__btn" id="tariffs" onClick={() => history.push('/tarifs')}>
            ТАРИФЫ
          </button>
          <button className="ibb-header__btn" id="chavo" onClick={() => history.push('/chavo')}>
            ЧАВО
          </button>
        </nav>

        <div className={classNames('ibb-header__languages', { active: open })} onClick={() => {toggle()}}>
          <span>{large}</span>
        

          <div className="ibb-header__languages-wraper">
            <div
              className={classNames('ibb-header__languages-shadow', { active: open })}
              onClick={() => toggle()}
            />
            <div className="ibb-header__languages_list" id={`${open ? 'language_list' : ''}`}>
                    <button
                      onClick={() => {
                        i18n.changeLanguage('ru'); 
                        setLarge('Ru');
                      }}
                      className={classNames('ibb-header__btn', {
                        active: i18n.language === 'ru' ? true : false,
                      })}
                    >
                      Ru
                    </button>

                    <button
                      onClick={() => {
                        i18n.changeLanguage('en');
                        setLarge('En');
                      }}
                      className={classNames('ibb-header__btn', {
                        active: i18n.language === 'en' ? true : false,
                      })}
                    >
                      En
                    </button>
            </div>
          </div>
        </div>
          <div className="ibb-header__inside">
            <button className="ibb-header__btn" onClick={() => history.push('/login')}>
              {t('Entry')}
            </button>

            <button className="ibb-header__btn" onClick={() => history.push('/signup')}>
              {t('Registration')}
            </button>
          </div>
      </div>
    </div>
  );
};

export default Header;
