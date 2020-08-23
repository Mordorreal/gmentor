import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import Logo from '../../../common/images/logo.svg';
import MouseImage from '../../../common/images/pc-mouse.svg';
import ButtonComponent from '../../button_component';
import Language from '../../language';

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
      <div className="first-screen-component__bg-image"></div>
      <div className="first-screen-component__header">
        <img
          className="first-screen-component__logo"
          src={Logo}
          alt="GMentor"
        />
        <Language />
      </div>
      <div className="first-screen-component__main-container">
        <div className="first-screen-component__title">
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_word_1' })}
            <span className="first-screen-component__text_primary">
              {intl.formatMessage({ id: 'first_page_word_2' })}
            </span>
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_word_3' })}
            <span className="first-screen-component__text_primary">
              {intl.formatMessage({ id: 'first_page_word_4' })}
            </span>
            {intl.formatMessage({ id: 'first_page_word_5' })}
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_word_6' })}
            <span className="first-screen-component__text_primary">
              {intl.formatMessage({ id: 'first_page_word_7' })}
            </span>
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            {intl.formatMessage({ id: 'first_page_word_8' })}
            <span className="first-screen-component__text_primary">
              {intl.formatMessage({ id: 'first_page_word_9' })}
            </span>
          </div>
        </div>
        <div className="first-screen-component__buttons">
          <div className="first-screen-component__button">
            <ButtonComponent isPrimary onClick={handleSubscribeClick}>
              {intl.formatMessage({ id: 'i_want_to' })}
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
