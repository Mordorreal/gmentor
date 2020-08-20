import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import InformationImage from '../../../common/images/information.svg';
import MoneyBagImage from '../../../common/images/money_bag_with_dollar_symbol.svg';
import RoadImage from '../../../common/images/road_with_broken_line.svg';
import TimeImage from '../../../common/images/clock.svg';

import TitleComponent from '../title_component';

import TextBlockComponent from './text_block_component';

import './second_screen_component.scss';

const SecondScreenComponent = () => {
  const intl = useIntl();
  return (
    <div className="second-screen-component">
      <div className="second-screen-component__title">
        <TitleComponent
          title={intl.formatMessage({ id: 'only_for_you' })}
          subtitle={intl.formatMessage({ id: 'individual' })}
        />
      </div>
      <div className="second-screen-component__text">
        {intl.formatMessage({ id: 'individual_plan_for_you' })}
      </div>
      <div className="second-screen-component__container">
        <TextBlockComponent
          img={
            <img
              src={RoadImage}
              alt={intl.formatMessage({ id: 'short_path' })}
            />
          }
          title={intl.formatMessage({ id: 'short_path' })}
          subtitle={intl.formatMessage({ id: 'learn_what_you_need' })}
        />
        <TextBlockComponent
          img={
            <img
              src={MoneyBagImage}
              alt={intl.formatMessage({ id: 'needed_costs' })}
            />
          }
          title={intl.formatMessage({ id: 'needed_costs' })}
          subtitle={intl.formatMessage({ id: 'individual_plan' })}
        />
        <TextBlockComponent
          img={
            <img
              src={TimeImage}
              alt={intl.formatMessage({ id: 'time_active' })}
            />
          }
          title={intl.formatMessage({ id: 'time_active' })}
          subtitle={intl.formatMessage({ id: 'focus_program' })}
        />
        <TextBlockComponent
          img={
            <img
              src={InformationImage}
              alt={intl.formatMessage({ id: 'information' })}
            />
          }
          title={intl.formatMessage({ id: 'information' })}
          subtitle={intl.formatMessage({ id: 'our_mentors' })}
        />
      </div>
    </div>
  );
};

export default SecondScreenComponent;
