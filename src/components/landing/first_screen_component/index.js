import React from 'react';

import MouseImage from '../../../common/images/pc-mouse.svg';
import ButtonComponent from '../../button_component';

import './first_screen_component.scss';

const handleSubscribeClick = () => {
  document && document
    .querySelector('.subscribe-component')
    .scrollIntoView({ block: 'start', behavior: 'smooth' });
}

const FirstScreenComponent = () => {
  return (
    <div className="first-screen-component">
      <div className="first-screen-component__header">
        GM
      </div>
      <div className="first-screen-component__main-container">
        <div className="first-screen-component__title">
          <div className="first-screen-component__text first-screen-component__text_title">
            Ваше
            <span className="first-screen-component__text_orange"> будущее </span>
            в ваших руках
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            {" а мы поможем Вам"}
          </div>
          <div className="first-screen-component__text first-screen-component__text_title">
            прийти к нему
            <span className="first-screen-component__text_orange"> быстрее </span>
          </div>
        </div>
        <div className="first-screen-component__subtitle">
          <div className="first-screen-component__text first-screen-component__text_orange">
            Нельзя родиться отличным программистом, но можно им стать!
          </div>
        </div>
        <div className="first-screen-component__buttons">
          <div className="first-screen-component__button">
            <ButtonComponent isOrange onClick={handleSubscribeClick}>Я хочу учиться!</ButtonComponent>
          </div>
        </div>
        <div className="first-screen-component__mouse-image animated infinite bounce">
          <img src={MouseImage} alt="mouse"/>
        </div>
      </div>
    </div>
  );
};

export default FirstScreenComponent;
