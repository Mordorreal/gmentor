import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import CopyrightComponent from '../../copyright_component';
import SocialsComponent from '../../socials_component';

import './footer_component.scss';

const FooterComponent = () => {
  const intl = useIntl();
  const copyright = (
    <div className="footer-component__copyright">
      <CopyrightComponent />
    </div>
  );

  const services = (
    <div className="footer-component__text">
      {intl.formatMessage({ id: 'services' })}
    </div>
  );

  const socials = (
    <div className="footer-component__socials">
      <SocialsComponent />
    </div>
  );

  const links = (
    <div className="footer-component__links">
      <a href="https://blog.gmentor.online/">
        {intl.formatMessage({ id: 'blog' })}
      </a>
    </div>
  );

  return (
    <div>
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
    </div>
  );
};

export default FooterComponent;
