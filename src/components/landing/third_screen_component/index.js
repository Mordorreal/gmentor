import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import DoodleComponent from '../../doodle_component';

import TitleComponent from '../title_component';
import ListItemComponent from './list_item_component';

import './third_screen_component.scss';

const ThirdScreenComponent = () => {
  const intl = useIntl();
  return (
    <div className="third-screen-component">
      <div className="third-screen-component__container">
        <div className="third-screen-component__title">
          <TitleComponent
            title={intl.formatMessage({ id: 'time_to_learn' })}
            subtitle={intl.formatMessage({ id: 'your_own_hands' })}
          />
        </div>
        <DoodleComponent type="round" />
        <div className="third-screen-component__list">
          <ListItemComponent
            text={intl.formatMessage({ id: 'individual_dev_plan' })}
          />
          <ListItemComponent
            text={intl.formatMessage({ id: 'personal_dev' })}
          />
          <ListItemComponent text={intl.formatMessage({ id: 'actual_tech' })} />
          <ListItemComponent
            text={intl.formatMessage({ id: 'we_know_how_to_teach' })}
          />
          <ListItemComponent
            text={intl.formatMessage({ id: 'cost_effective' })}
          />
        </div>
      </div>
    </div>
  );
};

export default ThirdScreenComponent;
