import React from 'react';
import { useIntl } from 'gatsby-plugin-intl';

import TitleComponent from '../title_component';

import './forth_screen_component.scss';

const ForthScreenComponent = () => {
  const intl = useIntl();
  return (
    <div className="forth-screen-component">
      <div className="forth-screen-component__title">
        <TitleComponent
          title={intl.formatMessage({ id: 'we_help_you' })}
          subtitle={intl.formatMessage({ id: 'want_to' })}
        />
      </div>
      <div className="forth-screen-component__video">
        <iframe title="main-video" allowFullScreen frameBorder="0" src="" />
      </div>
    </div>
  );
};

export default ForthScreenComponent;
