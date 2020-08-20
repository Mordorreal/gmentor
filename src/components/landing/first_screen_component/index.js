import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import Logo from '../../../common/images/logo.svg';
import MouseImage from '../../../common/images/pc-mouse.svg';
import ButtonComponent from '../../button_component';

import './first_screen_component.scss';

const handleSubscribeClick = () => {
  document &&
    document
      .querySelector('.subscribe-component')
      .scrollIntoView({ block: 'start', behavior: 'smooth' });
};

const FirstScreenComponent = () => {
  const intl = useIntl();
  return (
    <div className="first-screen-component">
      <div className="first-screen-component__header">
        <img
          className="first-screen-component__logo"
          src={Logo}
          alt="GMentor"
        />
      </div>
      <div className="first-screen-component__main-container">
        <div className="first-screen-component__title">
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_your' })}
            <span className="first-screen-component__text_orange">
              {intl.formatMessage({ id: 'first_page_future' })}
            </span>
            {intl.formatMessage({ id: 'first_page_your_hands' })}
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_we_will_help' })}
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_reach_it' })}
            <span className="first-screen-component__text_orange">
              {intl.formatMessage({ id: 'first_page_faster' })}
            </span>
          </div>
        </div>
        <div className="first-screen-component__subtitle">
          <div className="first-screen-component__text first-screen-component__text_orange">
            {intl.formatMessage({ id: 'first_page_can_born' })}
          </div>
        </div>
        <div className="first-screen-component__buttons">
          <div className="first-screen-component__button">
            <ButtonComponent isOrange onClick={handleSubscribeClick}>
              {intl.formatMessage({ id: 'first_page_want_to_learn' })}
            </ButtonComponent>
          </div>
        </div>
        <div className="first-screen-component__mouse-image animated infinite bounce">
          <img src={MouseImage} alt="mouse" />
        </div>
      </div>
    </div>
  );
};

export default FirstScreenComponent;
