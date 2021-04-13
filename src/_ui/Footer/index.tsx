import { Link, useHistory } from 'react-router-dom';

import '../../_styles/footer.less';
import { useTranslation } from 'react-i18next';
import classNames from 'classnames';
import logo from '../../_styles/img/logo.svg';
import { useState } from 'react';

const Footer = () => {
  //
  const { t, i18n } = useTranslation('common');

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
    <div className="ibb-footer">
      <div className="ibb-footer__wrap">
        <div className="ibb-footer__logo">
          <Link to="/">
            <img src={logo} alt="Homepage" />
          </Link>
        </div>

        <div className="ibb-footer__blok">
          <span style={{ opacity: 0.5 }}>© InfoBBook, {new Date().getFullYear()}</span>

          <div className="ibb-footer__messangers">
            <a
              className="ibb-footer__icon facebook"
              href="https://www.facebook.com/"
              target={'_blank'}
              rel="nofollow"
            ></a>
            
            <a
              className="ibb-footer__icon instagram"
              href="https://www.instagram.com/"
              target="_blank"
              rel="nofollow"
            ></a>

            <a
              className="ibb-footer__icon telegram"
              href="https://telegram.org/"
              target="_blank"
              rel="nofollow"
            ></a>
          </div>

          <span>{t('Created in ')}
          <a href="https://bweb.studio/" target="_blank" rel="nofollow">Bweb.studio</a>
          </span>
        </div>

        <div className="ibb-footer__links">
            <Link to="/user-agreement" id="terms">
              {t('User Agreement')}
            </Link>
            <Link to="/privacy-policy" id="protection">
              {t('Privacy policy')}
            </Link>
          </div>
      </div>
    </div>
  );
};

export default Footer;
