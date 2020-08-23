import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import ButtonComponent from '../../button_component';
import DoodleComponent from '../../doodle_component';

import TitleComponent from '../title_component';

import './sixth_screen_component.scss';

const handleSubscribeClick = () => {
  document &&
    document
      .querySelector('.subscribe-component')
      .scrollIntoView({ block: 'end', behavior: 'smooth' });
};

const SixthScreenComponent = () => {
  const intl = useIntl();
  return (
    <div className="sixth-screen-component">
      <DoodleComponent type="lines" />
      <div className="sixth-screen-component__title">
        <TitleComponent title={intl.formatMessage({ id: 'buy_ticket' })} />
        <br />
        <TitleComponent
          title={intl.formatMessage({ id: 'individual_education' })}
        />
      </div>
      <div className="sixth-screen-component__button">
        <br />
        <ButtonComponent isPrimary onClick={handleSubscribeClick}>
          {intl.formatMessage({ id: 'i_want_to' })}
        </ButtonComponent>
      </div>
    </div>
  );
};

export default SixthScreenComponent;
