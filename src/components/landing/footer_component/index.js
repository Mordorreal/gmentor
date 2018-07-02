import React from 'react';

import CopyrightComponent from '../../copyright_component';
import SocialsComponent from '../../socials_component';

import './footer_component.scss';

const MOBILE_RESOLUTION = 320;

const FooterComponent = () => {
  const width = window.innerWidth;
  const more320px = width > MOBILE_RESOLUTION;

  const copyright = (
    <div className="footer-component__copyright">
      <CopyrightComponent />
    </div>
  );

  const services = (
    <div className="footer-component__text">
      Сервисы
    </div>
  );

  const socials = (
    <div className="footer-component__socials">
      <SocialsComponent />
    </div>
  );
  /* eslint-disable no-undef */
  const links = (
    <div className="footer-component__links">
      <a href="https://blog.gmentor.online/">Блог</a>
    </div>
  );
  /* eslint-enable no-undef */

  return (
    <div>
      {more320px &&
        <div className="footer-component">
          <div className="footer-component__row">
            {copyright}
            {services}
          </div>
          <div className="footer-component__row footer-component__row_is-centered">
            {socials}
            {links}
          </div>
        </div>
      }
      {!more320px &&
        <div className="footer-component">
          {copyright}
          {socials}
          {services}
          {links}
        </div>
      }
    </div>
  );
};

export default FooterComponent;
