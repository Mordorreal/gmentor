import React from 'react';

import TitleComponent from '../title_component';
import ButtonComponent from '../../button_component';

import './sixth_screen_component.scss';


const handleSubscribeClick = () => {
  document && document
    .querySelector('.subscribe-component')
    .scrollIntoView({ block: 'end', behavior: 'smooth' });
}

const SixthScreenComponent = () => {
  return (
    <div className="sixth-screen-component">
      <div className="sixth-screen-component__title">
        <TitleComponent
          title="Купи билет в будущее"
          subtitle={`Индивидульное обучение. Только лучшее. Мы поможем`}
        />
      </div>
      <div className="sixth-screen-component__button">
        <ButtonComponent isOrange onClick={handleSubscribeClick}>Я хочу учиться!</ButtonComponent>
      </div>
    </div>
  );
};

export default SixthScreenComponent;
